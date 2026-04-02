import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { siteConfig } from "../config/site";
import { buildPostPath, getPostSlug, getSortedPosts } from "../utils/blog";

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function toAbsoluteUrl(path: string): string {
  return new URL(path, siteConfig.url).toString();
}

export const GET: APIRoute = async () => {
  const posts = await getCollection("posts", ({ data }) => !data.draft);
  const sortedPosts = getSortedPosts(posts);
  const feedUrl = toAbsoluteUrl("/rss.xml");
  const siteUrl = toAbsoluteUrl("/");
  const latestPostDate = sortedPosts.find((post) => post.data.date)?.data.date ?? new Date();

  const items = sortedPosts
    .map((post) => {
      const link = toAbsoluteUrl(buildPostPath(getPostSlug(post)));
      const title = escapeXml(post.data.title);
      const description = escapeXml(post.data.description || "");
      const pubDate = post.data.date ? new Date(post.data.date).toUTCString() : new Date().toUTCString();
      const categories = (post.data.categories || [])
        .map((category) => `<category>${escapeXml(category)}</category>`)
        .join("");
      const tags = (post.data.tags || [])
        .map((tag) => `<category>${escapeXml(tag)}</category>`)
        .join("");

      return `<item>
  <title>${title}</title>
  <link>${link}</link>
  <guid>${link}</guid>
  <description>${description}</description>
  <pubDate>${pubDate}</pubDate>
  ${categories}${tags}
</item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>${escapeXml(`${siteConfig.name} Blog`)}</title>
  <description>${escapeXml("Articole practice în limba română despre web design, SEO, hosting și procese digitale.")}</description>
  <link>${siteUrl}</link>
  <language>ro-RO</language>
  <lastBuildDate>${new Date(latestPostDate).toUTCString()}</lastBuildDate>
  <atom:link href="${feedUrl}" rel="self" type="application/rss+xml" />
${items}
</channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};

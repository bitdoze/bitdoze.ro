import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { siteConfig } from "../config/site";
import { buildPostPath, getPostSlug } from "../utils/blog";
import { getCollectionSlug } from "../utils/content";

type SitemapUrl = {
  loc: string;
  lastmod?: string;
  changefreq?: string;
  priority?: string;
};

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

function createUrlEntry(entry: SitemapUrl): string {
  return `<url>
  <loc>${escapeXml(entry.loc)}</loc>
  ${entry.lastmod ? `<lastmod>${entry.lastmod}</lastmod>` : ""}
  ${entry.changefreq ? `<changefreq>${entry.changefreq}</changefreq>` : ""}
  ${entry.priority ? `<priority>${entry.priority}</priority>` : ""}
</url>`;
}

export const GET: APIRoute = async () => {
  const [posts, servicii, portofoliu] = await Promise.all([
    getCollection("posts", ({ data }) => !data.draft),
    getCollection("servicii", ({ data }) => !data.draft),
    getCollection("portofoliu", ({ data }) => !data.draft),
  ]);

  const staticPages: SitemapUrl[] = [
    { loc: toAbsoluteUrl("/"), changefreq: "weekly", priority: "1.0" },
    { loc: toAbsoluteUrl("/about"), changefreq: "monthly", priority: "0.6" },
    { loc: toAbsoluteUrl("/blog"), changefreq: "weekly", priority: "0.9" },
    { loc: toAbsoluteUrl("/contact"), changefreq: "monthly", priority: "0.9" },
    { loc: toAbsoluteUrl("/faq"), changefreq: "monthly", priority: "0.6" },
    { loc: toAbsoluteUrl("/multumim"), changefreq: "yearly", priority: "0.3" },
    { loc: toAbsoluteUrl("/politica-de-confidentialitate"), changefreq: "yearly", priority: "0.3" },
    { loc: toAbsoluteUrl("/politica-de-cookies"), changefreq: "yearly", priority: "0.3" },
    { loc: toAbsoluteUrl("/portofoliu"), changefreq: "monthly", priority: "0.8" },
    { loc: toAbsoluteUrl("/search"), changefreq: "weekly", priority: "0.5" },
    { loc: toAbsoluteUrl("/servicii"), changefreq: "weekly", priority: "0.9" },
    { loc: toAbsoluteUrl("/termeni-si-conditii"), changefreq: "yearly", priority: "0.3" },
    { loc: toAbsoluteUrl("/rss.xml"), changefreq: "daily", priority: "0.4" },
  ];

  const postPages: SitemapUrl[] = posts.map((post) => ({
    loc: toAbsoluteUrl(buildPostPath(getPostSlug(post))),
    lastmod: post.data.date ? new Date(post.data.date).toISOString() : undefined,
    changefreq: "monthly",
    priority: "0.7",
  }));

  const servicePages: SitemapUrl[] = servicii.map((entry) => ({
    loc: toAbsoluteUrl(`/servicii/${getCollectionSlug(entry)}`),
    changefreq: "monthly",
    priority: "0.8",
  }));

  const portfolioPages: SitemapUrl[] = portofoliu.map((entry) => ({
    loc: toAbsoluteUrl(`/portofoliu/${getCollectionSlug(entry)}`),
    lastmod: entry.data.data ? new Date(entry.data.data).toISOString() : undefined,
    changefreq: "monthly",
    priority: "0.7",
  }));

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...staticPages, ...postPages, ...servicePages, ...portfolioPages]
  .map(createUrlEntry)
  .join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};

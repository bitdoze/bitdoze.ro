import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { statSync } from "node:fs";
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

// lastmod stabil din mtime-ul fișierului sursă (nu data build-ului,
// ca să nu pară tot site-ul „actualizat azi" la fiecare deploy).
function mtimeOf(relativePath: string): string | undefined {
  try {
    return statSync(new URL(`../../${relativePath}`, import.meta.url))
      .mtime.toISOString();
  } catch {
    return undefined;
  }
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
    { loc: toAbsoluteUrl("/"), lastmod: mtimeOf("src/pages/index.astro"), changefreq: "weekly", priority: "1.0" },
    { loc: toAbsoluteUrl("/about"), lastmod: mtimeOf("src/pages/about.astro"), changefreq: "monthly", priority: "0.6" },
    { loc: toAbsoluteUrl("/blog"), lastmod: mtimeOf("src/pages/blog.astro"), changefreq: "weekly", priority: "0.9" },
    { loc: toAbsoluteUrl("/contact"), lastmod: mtimeOf("src/pages/contact.astro"), changefreq: "monthly", priority: "0.9" },
    { loc: toAbsoluteUrl("/faq"), lastmod: mtimeOf("src/pages/faq.astro"), changefreq: "monthly", priority: "0.6" },
    { loc: toAbsoluteUrl("/politica-de-confidentialitate"), lastmod: mtimeOf("src/pages/politica-de-confidentialitate.md"), changefreq: "yearly", priority: "0.3" },
    { loc: toAbsoluteUrl("/politica-de-cookies"), lastmod: mtimeOf("src/pages/politica-de-cookies.md"), changefreq: "yearly", priority: "0.3" },
    { loc: toAbsoluteUrl("/portofoliu"), lastmod: mtimeOf("src/pages/portofoliu.astro"), changefreq: "monthly", priority: "0.8" },
    { loc: toAbsoluteUrl("/servicii"), lastmod: mtimeOf("src/pages/servicii.astro"), changefreq: "weekly", priority: "0.9" },
    { loc: toAbsoluteUrl("/termeni-si-conditii"), lastmod: mtimeOf("src/pages/termeni-si-conditii.md"), changefreq: "yearly", priority: "0.3" },
  ];

  const postPages: SitemapUrl[] = posts.map((post) => ({
    loc: toAbsoluteUrl(buildPostPath(getPostSlug(post))),
    lastmod: post.data.date ? new Date(post.data.date).toISOString() : undefined,
    changefreq: "monthly",
    priority: "0.7",
  }));

  const servicePages: SitemapUrl[] = servicii.map((entry) => ({
    loc: toAbsoluteUrl(`/servicii/${getCollectionSlug(entry)}`),
    lastmod: mtimeOf(`src/content/servicii/${entry.id}`),
    changefreq: "monthly",
    priority: "0.8",
  }));

  const portfolioPages: SitemapUrl[] = portofoliu.map((entry) => ({
    loc: toAbsoluteUrl(`/portofoliu/${getCollectionSlug(entry)}`),
    // Notă: `entry.data.data` nu e typo — `data` e numele câmpului de dată
    // din frontmatter-ul românesc (schema `portofoliu` din content.config.ts).
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

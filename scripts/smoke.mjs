// Smoke test pe output-ul din dist/ (rulează după `npm run build`).
// Zero dependențe — doar node built-ins. Eșuează cu exit 1 + motiv.
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
let failures = 0;

function fail(message) {
  failures += 1;
  console.error(`SMOKE FAIL: ${message}`);
}

function walk(dir, out = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (entry.name.endsWith(".html")) out.push(full);
  }
  return out;
}

if (!existsSync(dist)) {
  console.error("SMOKE FAIL: lipsește dist/ — rulează mai întâi `npm run build`.");
  process.exit(1);
}

// 1. Fișiere obligatorii
for (const required of [
  "index.html",
  "robots.txt",
  "sitemap.xml",
  "rss.xml",
  "search.json",
  "_headers",
  "site.webmanifest",
  "apple-touch-icon.png",
  "favicon-32x32.png",
  "images/og-image.jpg",
  "fonts/inter-400-latin.woff2",
  "fonts/fraunces-560-latin.woff2",
]) {
  if (!existsSync(join(dist, required))) fail(`lipsește dist/${required}`);
}

// 2. robots.txt pointează spre sitemap
const robots = readFileSync(join(dist, "robots.txt"), "utf8");
if (!robots.includes("Sitemap: https://www.bitdoze.ro/sitemap.xml")) {
  fail("robots.txt fără pointer Sitemap absolut");
}

// 3. Toate paginile HTML: title, canonical, og:image absolut, fără "undefined"
const pages = walk(dist);
if (pages.length < 30) fail(`prea puține pagini HTML: ${pages.length}`);
for (const page of pages) {
  const html = readFileSync(page, "utf8");
  const rel = page.slice(dist.length);
  const title = html.match(/<title>([^<]+)<\/title>/);
  if (!title || title[1].trim().length < 3) fail(`${rel}: <title> lipsă/scurt`);
  if (!html.includes('rel="canonical"')) fail(`${rel}: canonical lipsă`);
  const ogImage = html.match(/property="og:image" content="([^"]+)"/);
  if (!ogImage || !ogImage[1].startsWith("https://")) {
    fail(`${rel}: og:image lipsă sau relativ`);
  }
  if (/>undefined</.test(html) || /undefined\.webp|undefined\.jpg/.test(html)) {
    fail(`${rel}: conține „undefined" randat`);
  }
  // Referințe locale de asseturi trebuie să existe în dist
  for (const match of html.matchAll(/(?:src|href)="(\/(?:images|fonts)\/[^"]+)"/g)) {
    const assetPath = match[1].split("?")[0];
    if (!existsSync(join(dist, assetPath))) {
      fail(`${rel}: asset inexistent ${assetPath}`);
    }
  }
}

// 4. Imaginile optimizate de Astro există
const astroDir = join(dist, "_astro");
if (!existsSync(astroDir)) {
  fail("lipsește dist/_astro (imaginile optimizate)");
} else {
  const optimized = readdirSync(astroDir).filter((f) => /\.(webp|avif|jpg)$/.test(f));
  if (optimized.length === 0) fail("nicio imagine optimizată în dist/_astro");
  else console.log(`imagini optimizate în _astro: ${optimized.length}`);
}

// 5. sitemap.xml valid minimal
const sitemap = readFileSync(join(dist, "sitemap.xml"), "utf8");
const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (locs.length < 25) fail(`sitemap cu prea puține URL-uri: ${locs.length}`);
if (locs.some((loc) => !loc.startsWith("https://www.bitdoze.ro/"))) {
  fail("sitemap conține URL-uri non-absolute");
}
for (const match of sitemap.matchAll(/<lastmod>([^<]+)<\/lastmod>/g)) {
  if (Number.isNaN(Date.parse(match[1]))) fail(`lastmod invalid: ${match[1]}`);
}

// 6. search.json nu e balonat (excerpt, nu corpuri integrale)
const searchSize = statSync(join(dist, "search.json")).size;
if (searchSize > 60_000) fail(`search.json prea mare: ${searchSize} bytes`);
else console.log(`search.json: ${searchSize} bytes, ${pages.length} pagini HTML verificate`);

if (failures > 0) {
  console.error(`${failures} verificări eșuate.`);
  process.exit(1);
}
console.log("SMOKE OK");

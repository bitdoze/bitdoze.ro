# bitdoze.ro

Site-ul de prezentare al agenției BitDoze (Astro 7, română, SSG).
Servicii, portofoliu, blog, pagini legale. Deploy ca site static.

## Comenzi

- `npm run dev` — server local (`--host`)
- `npm run build` — build producție
- `npm run build:ci` — build cu heap 4GB (CI / mașini mici)
- `npm run preview` — previzualizare build
- `npm run check` — `astro check` (tipuri + validare)
- `npm run test` — smoke test pe `dist/` (după build): pagini, meta, asseturi, sitemap
- `npm run format` / `format:check` — prettier write/check (opt-in, doar
  fișiere non-`.astro`; repo-ul istoric nu e formatat integral, deci CI nu
  blochează pe stil — vezi `.prettierignore`)

## Arhitectură

- Conținut în colecții (`src/content.config.ts`): `posts` (`src/content/posts/*.mdx`),
  `servicii` (`src/content/servicii/*.md`), `portofoliu` (`src/content/portofoliu/*.md`)
- Layout-uri: `src/layouts/Layout.astro`, `BlogPostLayout.astro`, `ContentLayout.astro`
- Config: `src/config/` (`site.ts`, `company.ts`, `nav.ts`, `pages.ts`, `cta.ts`, `assets.ts`)
- Stiluri: `src/styles/global.css` (sursă canonică pentru tokens — vezi `DESIGN.md`)
  + `src/styles/fonts.css` (Fraunces + Inter self-hosted în `public/fonts/`)
- Imagini: rasterele stau în `src/assets/images/` și se randează prin
  `src/components/SmartImage.astro` (astro:assets + srcset; fallback `<img>`
  pentru SVG-uri din `public/`). Coperțile blogului rămân SVG în `public/images/blog/`.
- Căutare blog: `/search` + `/search.json`, client `src/scripts/blog-search.js` (fuse.js)

## Blog

Articole în română, sluguri URL-safe, copertă SVG 16:9 în `public/images/blog/`
(2–5 cuvinte vizibile). Frontmatter: vezi `AGENTS.md`. Maxim 3 taguri/postare.
URL-uri sub `/blog/[slug]/`.

## Formular contact

`POST` către FormSubmit (`office@bitdoze.ro`) cu `_honey` + `_captcha`.
Prima trimitere după deploy cere activarea adresei din dashboard-ul FormSubmit
(mail de activare), altfel redirectul spre `/multumim` nu pornește.

## SEO / social

- `robots.txt` în `public/`, sitemap artizanal `src/pages/sitemap.xml.ts`, RSS `rss.xml.ts`
- Imagine socială: `public/images/og-image.jpg` (1200×630). Meta: `MetaTags.astro`
- Analytics: Plausible, încărcat doar după consimțământ (`CookieConsent.astro`)

## Env

Momentan zero variabile de mediu / secrete (`import.meta.env` nefolosit).
Formularul nu cere chei. Dacă adaugi integrări cu secrete, pune-le în `.env`
(ignorat de git) și documentează-le aici.

## Deploy

Orice host static (loosely: Cloudflare Pages / Netlify / Vercel) cu comanda
`npm run build` și directorul `dist/`. CI rulează `check` + `build`
(vezi `.github/workflows/ci.yml`).

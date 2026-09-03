# Muse Review — bitdoze.ro

> **Status runde 2 (2026-09-03):** fonturi self-hosted (14 woff2 latin +
> latin-ext, zero requesturi Google — verificat 0 referințe în `dist/`),
> migrare pe `astro:assets` via `SmartImage.astro` (36 imagini optimizate în
> `dist/_astro`, ex. toolhunt 105kB → 6kB + srcset responsive), `lastmod` din
> mtime în sitemap, smoke test `scripts/smoke.mjs` (`npm run test`, 38 pagini
> verificate) + pas în CI, `sharp` dependență directă. Rămas pe om: diacritice
> (5 articole — rescriere cu grijă, nu conversie automată), testimoniale reale
> (componenta `Testimonials.astro` păstrată pentru reutilizare) și activarea
> FormSubmit după deploy. Non-buguri confirmate: `search.json` era deja excerpt
> (450 char), „frontmatter-ul duplicat" e exemplu în bloc de cod.

Data: 2026-09-03 · Branch curat (`1af508d`), `npm run build` trece (38 pagini, ~2s).
Verdict: proiect solid Astro 7, coerent ca produs, dar cu 3 datorii mari: drift de design tokens, găuri SEO/social de bază, lipsă CI/lint/test. Nimic blocant pentru deploy, mult de lustruit pentru încredere + conversie.

## P0 — repară prima dată (< 1h total)

1. **Lipsește `robots.txt`** — fără pointer spre sitemap. Verificat: `public/robots*` și `src/pages/robots*` nu există.
   Creați `public/robots.txt`:
   ```
   User-agent: *
   Allow: /
   Sitemap: https://www.bitdoze.ro/sitemap.xml
   ```

2. **`og:image` e SVG** (`src/config/site.ts:23`, `/images/og-image.svg`). Facebook/LinkedIn/X resping SVG.
   Generați `/images/og-image.jpg` 1200×630 + adăugați `og:image:width/height/alt` în `src/components/seo/MetaTags.astro:52-86`. Același lucru pentru coperțile blogului (toate 7 sunt `.svg` în `public/images/blog/`).

3. **Drift tokens — alegeți o singură sursă.** Acum 3 surse se contrazic:
   - `src/styles/global.css:5-23` (câștigă la runtime): `paper #faf7f0`, `ink #141715`, `moss #0e3b2c`, `clay #c93a00` + familia `ember #ff4d00`.
   - `DESIGN.md` body + `AGENTS.md:177` + `.impeccable/design.json`: `paper #faf8f4`, `ink #181b20`, `moss #1e3a32`, `clay #b0492b`, fără ember.
   - `DESIGN.md` frontmatter contrazice propriul body (folosește valorile din `global.css`).
   Efecte vizibile: `.btn` e `12px / 0.95rem 1.6rem` (`src/styles/global.css:145`) vs spec `6px / 11px 20px` (`DESIGN.md:202-204`); `.card` e `16px + border 2px + hard shadow` (`src/styles/global.css:343-359`) vs spec `10px + hairline 1px, fără lift`; `.kicker` e pill (`src/styles/global.css:285-306`) vs spec mono + linie 32px; headings `640` (`src/styles/global.css:133`) vs spec `560`.
   Recomandare: decideți `ember` vs `moss-primary` + `paper #faf7f0` vs `#faf8f4`, apoi aliniați `global.css` + `DESIGN.md` + `design.json` + `MetaTags.astro:98` (`theme-color #1e3a32` e stale oricum) + `public/site.webmanifest:8,10` (`theme_color #009cef` vs `#1e3a32`).

4. **Meta faptice:**
   - `AGENTS.md:14` zice "Astro v6", real `astro ~7.2.10` (`package.json:16`). Corectați în v7.
   - `package.json:2` `name: "astro-test-zed"` → `bitdoze-ro`.
   - `README.md:1-178` e 100% template generic (`yourusername/business-website-template`, zero BitDoze). Rescrieți sau ștergeți — acum induce în eroare orice agent nou.

## P1 — SEO / social / analytics

5. **Sitemap artizanal, fără `lastmod` pe statice/servicii** (`src/pages/sitemap.xml.ts:43-67`). Adăugați `lastmod` din git sau dată fixă; verificați `src/pages/sitemap.xml.ts:71` (`entry.data.data` — funcționează pentru că schema `portofoliu` are câmpul `data`, dar e confuz; redenumiți mental în `date` la următorul refactor sau comentați).
6. **`dateModified` fals proaspăt**: `src/components/seo/StructuredData.astro:101` pune `new Date().toISOString()` când lipsește. Fiecare build pare "actualizat azi". Nu mai dați default la now; treceți `dateModified = datePublished` din `src/layouts/BlogPostLayout.astro:40-49`.
7. **Plausible mort**: `src/components/seo/MetaTags.astro:100-110` definește coada `window.plausible` dar nu încarcă niciodată `plausible.js`. Ori adăugați scriptul (după consimțământ, via `src/components/CookieConsent.astro:1-490`), ori ștergeți stub-ul.
8. **Favicon/manifest incomplete**: ambele linkuri icon point spre `/favicon.svg` (`src/components/seo/MetaTags.astro:89-90`, al doilea cu MIME greșit `image/x-icon`); lipsă `apple-touch-icon` PNG + 192/512 PNG în `public/site.webmanifest:10-17`. Adăugați PNG-uri reale.
9. **Lipsă `article:published_time`, `og:image:alt`, `meta author`** — win ieftin în `MetaTags.astro` + `BlogPostLayout.astro:34-50`.

## P1 — imagini / performanță

10. **Zero `astro:assets` (`<Image>`)** — toate 14 `<img>` sunt raw. CLS real: doar `src/components/Welcome.astro:49` și `YouTubeEmbed.astro:75-76` au `width/height`. Adăugați dimensiuni pe: `src/layouts/BlogPostLayout.astro:76` (hero, are `fetchpriority=high` dar fără dims), `src/components/blog/PostCard.astro:18`, `src/components/blog/RelatedPosts.astro:33-38`, `PortofolioCard.astro:18`, `portofoliu/[slug].astro:56`, `Header.astro:29`, `Footer.astro:28`, `about.astro:50-55`.
11. **`alt=""` pe carduri cu link** (`src/components/blog/PostCard.astro:18`, `src/scripts/blog-search.js:47`). E defensibil (titlul e textul linkului), dar pierdeți SEO pe image search. Puneți `alt={post.title}` ca în `RelatedPosts.astro:35`.
12. **`search.json.ts:8-17` trimite corpurile complete** — indexul Fuse (`fuse.js@7.5`, izolat doar pe `/search`, bine) poate ajunge la sute de KB. Treceți pe excerpt (~200 char) + păstrați `cache: force-cache` din `src/scripts/blog-search.js:24`.
13. **Fonturi**: `preconnect + media=print onload` în `src/layouts/Layout.astro:54-65` e bine. Pasul următor: self-host Fraunces+Inter (GDPR, fără dependență Google).
14. **Hartă OSM**: `src/pages/contact.astro:186-190` `loading=lazy + title` e corect. Păstrați `height 24rem` fix.

## P1 — accesibilitate

15. **Contrast**: `ember #ff4d00` pe `paper #faf7f0` ~3.3:1 — pică text normal. Folosit ca text în `PostCard:71`, search tag. Regula: niciodată `--color-ember` pentru text, doar `ember-deep #c93a00` (~4.6:1) sau `ember-soft` pe dark.
16. **Reduced motion incomplet**: `src/styles/global.css:503-507` resetează doar `scroll-behavior`. Adăugați `*,*::before,*::after { animation: none; transition: none; }` în media query.
17. **Skip-link hacky**: `src/layouts/Layout.astro:96-104` folosește `onfocus/onblur` inline. Înlocuiți cu clasă CSS + `:focus-visible`.
18. **Focus ok, dar inconsecvent**: baza `global.css:486-497` (3px `ember-deep`) e bună; `YouTubeEmbed.astro:191-194` folosește `moss` — aliniați pe ember.
19. Ce e bine și păstrați: `h1` unic verificat, `label[for]+autocomplete` pe contact (`src/pages/contact.astro:65,80,114-124`), `role=search` (`search.astro:22-32`), tabel ore cu `caption` + `th scope=row`, touch targets 44–54px, `body padding-bottom 76px` pentru sticky CTA mobil.

## P1 — securitate / form / GDPR

20. **Formular via FormSubmit** (`src/pages/contact.astro:56`, `POST https://formsubmit.co/office@bitdoze.ro`): emailul e expus în HTML (de așteptat), protecție doar `_honey` (`contact.astro:60`), fără CAPTCHA/rate-limit. Verificați că `_next https://www.bitdoze.ro/multumim` e activat în dashboard FormSubmit, altfel primul submit cere activare. Pe termen lung: endpoint propriu sau Turnstile.
21. **`target=_blank`**: 9/11 au `rel=noopener noreferrer` — bine. Verificați restul.
22. **XSS**: `blog-search.js:34-67` escape-uiește corect; `StructuredData.astro:164` e JSON-only. Atenție la `about.astro:36` `set:html={storySection.content}` — HTML brut din config; ok cât e trusted, nu băgați input utilizator acolo.
23. **Fără CSP.** Dacă platforma permite headere, adăugați minim: `default-src 'self'; img-src 'self' data: https:; frame-src youtube.com www.youtube.com openstreetmap.org;`.
24. **Unsplash hotlinks** (`src/config/assets.ts:26-29`, `src/config/pages.ts:428`): self-host-uiți-le. E și problemă GDPR (requesturi către US fără consimțământ) + risc de picare.

## P2 — conținut / voce românească

25. **Diacritice inconsecvente**: 5/7 postări sunt ASCII-only ("incepi", "fara"), doar 2 folosesc ă/â/î/ș/ț. Standardizați pe diacritice corecte — contează pentru SEO RO + încredere.
26. **Frontmatter**: `cat-costa-un-website-in-2026.mdx` are 6 taguri (spec max 3, `AGENTS.md:42`). `cum-sa-incepi-blog-gratis-astro-js.mdx:170-179` conține un al doilea bloc frontmatter în corp (exemplu de cod) — verificați randarea, probabil apare ca text vizibil; înfășurați-l clar ca exemplu sau scoateți-l.
27. **Testimoniale placeholder** (`src/config/pages.ts:370-395`, Maria Ionescu / Mihai Popa, `avatar:""`). Înlocuiți cu clienți reali sau ștergeți secțiunea — placeholder-ele omoară încrederea exact unde contează.
28. **`company.ts:45` `zip:""` gol** — randează spațiu aiurea în adresă. Completați sau scoateți din template.
29. **Hero nefolosit**: `homePageConfig.sections.hero` (`src/config/pages.ts:280-308`, cu stats `50+/10+/24-7`) nu e randat niciodată de `src/pages/index.astro:17-30` și contrazice anti-referința "fără hero cu metrici" (`PRODUCT.md:40`). Ștergeți-l sau randati-l — nu-l lăsați mort.
30. **Schema `image` opțional** (`src/content.config.ts:11`) dar `AGENTS.md` cere copertă obligatorie. Faceți-l `z.string()` required ca să prindeți lipsuri la build.

## P2 — cod mort / config

31. `src/config/services.ts` — **zero importuri**. Duplică colecția `servicii` (7 intrări). Ștergeți-l; sursa unică e `src/content/servicii/`.
32. `src/config/assets.ts:32-75` — `/logo.svg`, `/partners/*.svg`, `/images/team/*`, `/images/services/{digital-marketing,…}` **nu există** în `public/`. Curățați cheile moarte.
33. `src/assets/astro.svg`, `background.svg` — leftovers starter. Ștergeți după verificare referințe.
34. `Portofolio.astro` vs `PortofolioCard.astro` — typo inconsecvent (un `i` vs doi). Redenumiți la `Portofoliu*`.
35. `SeriesNav.astro` există pe disc dar nu e în `MarkdownComponents.astro:1-23` (e folosit doar intern de `SeriesWidget.astro:2` — ok, dar documentați; `AGENTS.md` nu-l listează, corect).
36. `Button` widget acceptă `blue/green/red/purple/gray` (`src/components/blog/widgets/Button.astro:12,75-80`) — complet în afara sistemului moss/clay/ember. Restricționați la `primary/secondary/accent`.
37. `vite.server.fs.strict=false` (`astro.config.mjs:14-18`) — ok local, nu copiați în prod.
38. `overrides.vite ^8` în `package.json:21-23` e agresiv; adăugați comentariu de ce e nevoie.

## P2 — DX: lint / CI / docs

39. **Zero lint/format/test/CI**: fără eslint/prettier/biome/vitest, fără `.github/`. Adăugați minim:
   ```json
   { "scripts": { "format": "prettier --write .", "lint": "prettier --check ." } }
   ```
   + `.github/workflows/ci.yml`: `npm ci && npm run check && npm run build`.
   Momentan `check` (`astro check`) există dar nu-l rulează nimic automat.
40. `tsconfig.json` e ok (`strict`, `verbatimModuleSyntax`). Păstrați.
41. Adăugați în README (rescris): deploy target (Cloudflare/Vercel/Netlify — blogul le recomandă pe toate trei, dar repo-ul nu spune unde deployați), `build:ci` cu 4GB heap, variabile env (momentan zero `import.meta.env` — bine, notați asta).

## Roadmap sugerat

- **Azi (< 1h)**: robots.txt, rename pachet, fix `AGENTS.md` v6→v7, `zip`, taguri 6→3, `dateModified`, PNG favicon/og.
- **Săptămâna asta**: unificare tokens (1 decizie + grep replace), `width/height` pe imagini, contrast ember, reduced-motion global, curățare `services.ts` + `assets.ts` mort + Unsplash self-host, testimoniale reale.
- **Luna asta**: CI + prettier, `Image` Astro + 1200×630 JPG social, excerpt search index, CSP, self-host fonturi, README rescris cu deploy + workflow blog.

Fișiere de pornit: `src/styles/global.css`, `DESIGN.md`, `src/components/seo/MetaTags.astro`, `src/pages/sitemap.xml.ts`, `src/config/pages.ts`, `src/config/services.ts`, `src/config/assets.ts`, `AGENTS.md`, `package.json`, `README.md`.

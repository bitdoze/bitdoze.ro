# BitDoze.ro – Action Plan for Improvements

This action plan prioritizes improvements across Astro implementation, CSS, design/UX, and SEO. Items are grouped by category and labeled by severity: [critical], [medium], [low]. Each item includes concrete guidance and file references to speed up implementation.

## Astro Implementation
- [critical] HTML language is wrong: set Romanian locale
  - What: Change `lang="en"` to `lang="ro"` for accurate i18n/SEO/a11y.
  - Where: `src/layouts/Layout.astro:49`
- [critical] Missing `site` in Astro config (affects canonical URLs and sitemap)
  - What: Add `site: "https://bitdoze.ro"` in Astro config and enable sitemap integration.
  - Where: `astro.config.mjs:9`
  - How: `export default defineConfig({ site: "https://bitdoze.ro", integrations: [icon(), sitemap()] })` and install `@astrojs/sitemap`.
- [critical] Robots and sitemap are absent
  - What: Add `public/robots.txt` and generate `sitemap.xml` via `@astrojs/sitemap`.
  - Where: robots missing at `public/robots.txt` (not found); add `Sitemap: https://bitdoze.ro/sitemap-index.xml` once sitemap is enabled.
- [critical] Broken navigation targets in footer
  - What: Remove or implement pages for `"/team"`, `"/careers"`, `"/blog"`, `"/resources"` (currently 404s).
  - Where: `src/config/nav.ts:61`, `src/config/nav.ts:65`, `src/config/nav.ts:87`, `src/config/nav.ts:95`
- [medium] Duplicate routes for services can dilute SEO
  - What: Unify to a single locale route (prefer `"/servicii"`) and 301 redirect `"/services"` or hide it from nav/links.
  - Where: `src/pages/servicii.astro:1`, `src/pages/services.astro:1`
- [medium] Canonical URL source is environment-dependent in dev
  - What: After setting `site` in config, ensure pages pass a full canonical when needed (especially dynamic pages) or rely on MetaTags building with `Astro.site`.
  - Where: `src/components/seo/MetaTags.astro:31`
- [medium] Analytics script should be gated to production
  - What: Load analytics only in prod and document consent handling (cookie banner is implied by policy pages).
  - Where: `src/components/seo/MetaTags.astro:95`
  - How: Wrap with `{import.meta.env.PROD && (<script ... />)}`
- [low] Improve header a11y on mobile
  - What: Add `aria-controls="mobile-menu"` to the toggle button; consider focus-trap when menu is open.
  - Where: `src/components/Header.astro:79` (button), `src/components/Header.astro:106` (menu)

## SEO
- [critical] Open Graph image path points to a missing asset
  - What: Either add the file at `/public/images/og-image.jpg` or update config to an existing asset (e.g., `/bitdoze_logo_better.svg` or a new `og-image.webp`).
  - Where: `src/config/site.ts:23` (ogImage), file missing under `public/images/`
- [critical] No sitemap and robots (see Astro section) — implement together
- [medium] Structured Data uses fallback images that don’t exist
  - What: Replace default `logo.png`, `storefront.jpg`, `article-image.jpg` fallbacks with existing assets.
  - Where: `src/components/seo/StructuredData.astro:29`, `:45`, `:63`, `:73`
  - Suggestion: Use `/bitdoze_logo_better.svg` for logo and add a branded cover in `/public/images/` for website/article.
- [medium] Add missing OG/Twitter enhancements
  - What: Add `og:locale` (`ro_RO`), and optionally `twitter:site` if you have a handle.
  - Where: `src/components/seo/MetaTags.astro:53` (OG block) and `:72` (Twitter block)
- [medium] Avoid duplicate-content confusion
  - What: Ensure internal links consistently use one URL path (`/servicii`), and consider 301 redirect for the alternative (`/services`).
  - Where: Cross-site links (e.g., `src/pages/portofoliu/[...slug].astro:236` links to `/services`)
- [low] Favicon link type mismatch
  - What: Keep the SVG icon; remove or correct the `image/x-icon` link which currently points to an SVG.
  - Where: `src/components/seo/MetaTags.astro:90-93`
- [low] 404 page missing
  - What: Add `src/pages/404.astro` for better UX and indexing hygiene.

## CSS
- [medium] Dark mode tokens are duplicated and partially conflicting
  - What: Consolidate dark-mode variables to a single source (prefer `src/styles/global.css` tokens); remove duplicate overrides from `ThemeToggle.astro`.
  - Where: `src/styles/global.css` (root tokens), `src/components/ThemeToggle.astro` (global dark overrides)
- [medium] Reduce custom CSS where Tailwind utilities already exist
  - What: Audit large class blocks (e.g., buttons, cards) and consider moving repeated patterns to small utility classes or Tailwind comps; this will shrink CSS and improve consistency.
  - Where: `src/styles/global.css` (buttons/cards), component-scoped styles across `src/components/*`
- [medium] Motion and effects are heavy in places
  - What: Extend `prefers-reduced-motion` handling beyond Footer to sections with background blobs, parallax and large gradients.
  - Where: Examples: `src/pages/index.astro` (services section), `src/pages/servicii/[...slug].astro:640+`, `src/pages/portofoliu/[...slug].astro:220+`
- [low] Container duplication
  - What: You define a custom `.container` while also using Tailwind’s container utilities. Standardize on one to avoid conflicts.
  - Where: `src/styles/global.css:248` (custom container)

## Design & UX
- [medium] Navigation clarity and active state
  - What: Add `aria-current="page"` for active nav links and visible active styles to orient users.
  - Where: `src/components/Header.astro:38-55`
- [medium] Consistent button variants and spacing
  - What: Buttons are well defined; ensure all CTAs use `.btn` variants to avoid local drift and keep spacing consistent across pages.
  - Where: Audit `src/pages/**/*.astro` for ad‑hoc CTA styles.
- [medium] Mobile menu UX
  - What: Consider closing on Escape, focus-trap within the menu, and restoring focus to the toggle on close.
  - Where: `src/components/Header.astro:148-190`
- [low] Visual weight of backgrounds and glows
  - What: Slightly reduce opacity and blur on background blobs/gradients to reduce visual noise and improve legibility.
  - Where: Sections with `blob` and gradient backgrounds (Home, Services, Portfolio detail)

## Images & Performance
- [medium] Use Astro’s `<Image />` for optimization and CLS prevention
  - What: Import images and use `Image` from `astro:assets` to get automatic width/height, modern formats, and lazy-loading.
  - Where: e.g., `src/components/PortofolioCard.astro:21`, `src/pages/portofoliu/[...slug].astro:93-97`, `src/pages/about.astro:39-47`
- [medium] Add explicit width/height when using plain `<img>`
  - What: If not switching to `Image`, set width/height attributes or CSS `aspect-ratio` to avoid layout shift (some places already use `aspect-ratio`, keep that pattern consistent).
- [low] Defer non-critical JS and minimize repeated scripts
  - What: `animations.js` runs multiple observers; consider splitting by route or checking for feature classes before initializing to reduce overhead.
  - Where: `src/scripts/animations.js`

## Quick Wins (Do These First)
1) Fix language + OG image + broken footer links
- Change `lang` to `ro` in `src/layouts/Layout.astro:49`.
- Update `ogImage` or add `/public/images/og-image.jpg` (`src/config/site.ts:23`).
- Remove or implement `/team`, `/careers`, `/blog`, `/resources` in `src/config/nav.ts`.

2) Configure `site`, sitemap, and robots
- Add `site` to `astro.config.mjs` and integrate `@astrojs/sitemap`.
- Create `public/robots.txt` with `Sitemap: https://bitdoze.ro/sitemap-index.xml`.

3) Unify services route
- Keep `/servicii` and either delete `/services.astro` or 301 redirect to the Romanian path. Update internal links using `/services` to point to `/servicii`.

4) Structured Data assets
- Point logo and images in `StructuredData.astro` to existing files.

5) Production‑guard analytics
- Wrap analytics script with `{import.meta.env.PROD && ...}` in `MetaTags.astro`.

## Nice-to-Haves (Next Iteration)
- Add a custom 404 page (`src/pages/404.astro`).
- Promote consistent `.btn` usage and remove component‑local CTA button styling.
- Expand `prefers-reduced-motion: reduce` handling to all animated sections.
- Migrate key images to `astro:assets` and add `width`/`height` attributes where staying with `<img>`.
- Consider `@astrojs/tailwind` integration if you ever outgrow the Vite plugin setup (current setup is fine for Tailwind v4).

## Notes on Existing Strengths
- Clean, modular config-driven pages (`src/config/pages.ts`, `site.ts`, `nav.ts`).
- Solid SEO foundation with reusable `MetaTags.astro` and `StructuredData.astro`.
- Cohesive design system with CSS variables and button/card primitives.
- Good use of `astro-icon` and content collections for `servicii` and `portofoliu`.

---

If you want, I can implement the “Quick Wins” as a single follow-up change set and open small follow-ups for the rest.

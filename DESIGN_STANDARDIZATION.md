## Design Standardization Plan

Goals:

- Consistent typography, spacing, and color usage across pages/components
- One button system with clear variants and sizes
- Fewer ad‑hoc styles; lean on shared tokens/utilities
- Predictable responsive spacing and container behavior
- Clean dark mode behavior with tokens only (no hardcoded white/black)

---

### Current Findings

- Typography: System font is set (`--font-sans`), but heading sizes and line‑heights are defined ad‑hoc per component (e.g., Hero uses `text-5xl lg:text-7xl`, SectionHeader has its own scale). No shared heading scale utilities.
- Buttons: Multiple bespoke styles exist instead of `.btn` utilities defined in `src/styles/global.css`:
  - Header CTA uses a custom `.cta-button` (src/components/Header.astro:66)
  - Hero uses `.modern-btn-primary` / `.modern-btn-secondary` (src/components/Hero.astro:100,109)
  - Footer CTA uses `.footer-cta` (src/components/Footer.astro:194)
  - Service cards define their own CTA styles (e.g., ServiceCardV2 `.cta-button`).
- Spacing: There are section utilities in `global.css` (`.section-padding*`) but many sections use Tailwind paddings directly (`py-12`, `py-16`, `px-4`) alongside `.container`, which already applies horizontal padding. Example double padding: `container ... px-4` in header (src/components/Header.astro:23).
- Colors: Tokens exist and are good (`:root` colors in `global.css`), but several components use hardcoded hex values and gradients:
  - ServiceCardV2 uses `#7c3aed`, `#ef4444`, `#22c55e` in many places (src/components/ServiceCardV2.astro styles)
  - `portfolio.css` mixes token colors with rgba using literal numbers for primary.
- Shadows/Radius: Tokens exist (`--shadow-*`, `--radius-*`), but components often re‑specify custom shadows/radii.
- Inline styles: Many places mix Tailwind classes, inline styles and component <style> blocks. Recommend moving inline color/background to token‑backed utilities/classes where possible.

---

### Proposed Standards

Typography

- Headings: Add global heading utilities and use them project‑wide:
  - `.heading-1`: clamp(2.25rem, 2vw + 1.5rem, 3.5rem); 700; tight leading
  - `.heading-2`: clamp(1.875rem, 1.5vw + 1.25rem, 2.5rem); 700
  - `.heading-3`: 1.5rem; 600
  - Apply consistent margins: `margin-bottom: var(--space-4)` for headings.
- Body text: Default `1rem` with `line-height: 1.7`; keep `.prose` for rich text and ensure components don’t override color/line‑height per‑component unless necessary.
- Font family: Keep `--font-sans` or consider introducing a brand font via `@font-face` and map it to `--font-sans` for a single switch.

Spacing & Layout

- Containers: Use `.container` only (it already applies horizontal padding). Remove extra `px-4` when `.container` is present.
- Section spacing: Standardize sections to `.section-padding` (default), with `-sm`/`-lg` only when needed. Avoid ad‑hoc `py-*` on root sections.
- Component spacing: Prefer tokenized spacing (`var(--space-*)`) in component CSS and Tailwind equivalents where appropriate.

Colors & Theming

- Use only token colors from `:root` in `global.css` for both light and dark. Replace any hardcoded hexes in components with the corresponding token or an rgba of token rgb vars.
- Define semantic aliases for clarity where helpful (e.g., `--color-brand`, `--color-surface`, `--color-muted`).
- Gradients: Add shared gradient utilities (e.g., `.bg-gradient-brand`, `.text-gradient-brand`) built from tokens and reuse those instead of per‑component implementations.

Buttons

- Adopt the existing `.btn` system in `src/styles/global.css` as the single source of truth.
- Variants to support:
  - Primary: `.btn .btn-primary`
  - Secondary: `.btn .btn-secondary`
  - Outline: `.btn .btn-outline`
  - Accent (optional): `.btn .btn-accent`
  - Sizes: `.btn-sm`, `.btn-lg`
- Migration: Convert all bespoke CTAs to `.btn` variants (see Migration Examples below).

Cards/Badges/Shadows

- Cards: Use `.card` from `global.css` as the base, extend with minimal component‑specific styles.
- Badges: Consolidate to `.badge` + variant classes already provided in `global.css`.
- Shadows/radii: Use `--shadow-*` and `--radius-*` consistently; avoid arbitrary values per component.

Animations & Motion

- Use the `--transition-*` tokens for timings and keep hover transforms modest for consistency.
- Ensure `prefers-reduced-motion` fallbacks are present (many components already do this—continue the pattern globally).

Dark Mode

- Replace any hardcoded `white`/`black` overlays and borders with token‑based rgba using `--color-*-rgb` variables. Example: white highlight sweeps → `rgba(var(--color-dark-text-rgb), 0.2)` in dark mode.

---

### Migration Examples (by file)

Header CTA

- File: `src/components/Header.astro:66`
- Replace custom `.cta-button` with standardized button classes:
  - Before: `class="cta-button ... px-6 py-2 text-sm ... rounded-lg ..."`
  - After: `class="btn btn-primary btn-sm"`
- Also remove duplicate padding on container if present:
  - `src/components/Header.astro:23` → drop `px-4` when using `.container`.

Hero Buttons

- File: `src/components/Hero.astro:100,109`
- Replace `.modern-btn-primary` → `btn btn-primary btn-lg`
- Replace `.modern-btn-secondary` → `btn btn-secondary btn-lg`
- Remove the component‑specific button CSS blocks under “Modern buttons”.

Footer CTA

- File: `src/components/Footer.astro:194`
- Replace `.footer-cta` → `btn btn-primary btn-lg`
- Leverage existing `.btn` hover/focus styles instead of bespoke rules in `<style>`.

Service Cards

- File: `src/components/ServiceCardV2.astro`
  - Replace hardcoded colors (`#7c3aed`, `#ef4444`, `#22c55e`) with tokens:
    - `var(--color-primary)`, `var(--color-primary-dark)`, `var(--color-accent)`, `var(--color-success)` and corresponding `*-rgb` for rgba.
  - Replace `.cta-button` with `btn btn-primary` and delete redundant hover keyframes that mimic button hover.
  - Use `--shadow-*` and `--radius-*` for box‑shadows and radii.

Portfolio Styles

- File: `src/styles/portfolio.css`
  - Convert rgba literals for primary to use token `--color-primary-rgb`.
  - Ensure tags and CTAs use `.badge` and `.btn` variants where feasible.

Section Spacing

- Wherever sections use `py-12`, `py-16`, etc., replace with `.section-padding(-sm|-lg)` as appropriate. Example:
  - `src/components/CTA.astro` root section → `.section-padding` (and remove ad‑hoc `py-12`).

Typography Scale

- Add `.heading-*` utilities in `global.css` and replace scattered `text-5xl`, `md:text-4xl`, etc., with utility classes:
  - Example in `src/components/Hero.astro:81` → `class="heading-1"`
  - Example in `src/components/SectionHeader.astro` → map `textSize` prop to `.heading-2`/`.heading-3` classes.

Gradients

- Introduce shared utilities in `global.css`:
  - `.bg-gradient-brand { background: linear-gradient(135deg, var(--color-primary), var(--color-secondary)); }`
  - `.text-gradient-brand { background: linear-gradient(135deg, var(--color-primary), var(--color-secondary), var(--color-accent)); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; }`
- Use these in Hero, CTA, Header nav indicators, etc., instead of per‑component gradients.

---

### Concrete To‑Dos (Suggested Order)

1) Buttons unification

- Replace bespoke CTAs in Header, Hero, Footer, ServiceCardV2 with `.btn` variants.
- Delete redundant per‑component button CSS.

2) Spacing and containers

- Remove extra `px-4` where `.container` is used (Header: `src/components/Header.astro:23`).
- Normalize section paddings to `.section-padding*`.

3) Colors cleanup

- Replace all hardcoded hex colors in `ServiceCardV2.astro` with tokens.
- Update `portfolio.css` to use `var(--color-primary-rgb)` for rgba expressions.

4) Typography scale

- Add `.heading-1/2/3` utilities to `global.css`.
- Migrate components to new heading utilities.

5) Gradients utilities

- Add `.bg-gradient-brand` and `.text-gradient-brand` in `global.css`.
- Replace per‑component gradient definitions.

6) Shadows/radii

- Swap custom shadows/radii across components to use `--shadow-*` and `--radius-*`.

7) Dark mode passes

- Replace white overlays/borders in Hero/CTA/Footer with token‑based rgba.
- Confirm contrast meets WCAG for both modes.

---

### Quick Code Snippets

- Standard button usage:

  ```html
  <a href="/contact" class="btn btn-primary btn-lg">Solicită ofertă</a>
  <a href="/servicii" class="btn btn-secondary btn-lg">Află mai multe</a>
  <button class="btn btn-outline btn-sm">Detalii</button>
  ```

- Example tokenized rgba (replace hex):

  ```css
  /* Before */
  box-shadow: 0 4px 15px rgba(124, 58, 237, 0.3);

  /* After */
  box-shadow: 0 4px 15px rgba(var(--color-primary-rgb), 0.3);
  ```

- Example container cleanup:

  ```html
  <!-- Before -->
  <div class="container mx-auto px-4">...</div>
  <!-- After (container already sets horizontal padding) -->
  <div class="container">...</div>
  ```

---

### Optional Enhancements

- Brand font: add one via `@font-face` and map to `--font-sans` for an instant brand lift.
- Token aliases: add `--color-brand`, `--color-surface`, `--color-muted` to simplify reasoning.
- Components library: extract shared elements (badge, card header, section header) into partials or class utilities to further reduce duplication.

---

### Files Touched (for reference)

- Colors/spacing tokens: `src/styles/global.css`
- Buttons/cards/badges utilities: `src/styles/global.css`
- Header CTA: `src/components/Header.astro:66`
- Hero CTAs: `src/components/Hero.astro:100`, `src/components/Hero.astro:109`
- Footer CTA: `src/components/Footer.astro:194`
- Service CTA V2: `src/components/ServiceCardV2.astro`
- Portfolio styles: `src/styles/portfolio.css`

---

If you want, I can implement Phase 1 (buttons + container/spacing cleanup) in a small PR to show the pattern before rolling it out project‑wide.


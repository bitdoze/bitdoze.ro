# Agents Guide for bitdoze.ro

Date: 01 April 2026

## Commands

- `dev`: `npm run dev`
- `build`: `npm run build`
- `preview`: `npm run preview`
- `astro`: `npm run astro`

## Architecture

- Astro v6 site for BitDoze Romania
- Main areas: service pages, portfolio pages, legal pages, and a Romanian blog
- Content collections live in `src/content.config.ts`
- Current collections:
  - `posts` for blog articles in `src/content/posts/`
  - `servicii` for services in `src/content/servicii/`
  - `portofoliu` for portfolio entries in `src/content/portofoliu/`
- Main layout: `src/layouts/Layout.astro`
- Blog article layout: `src/layouts/BlogPostLayout.astro`
- Blog widgets: `src/components/blog/widgets/`
- Blog search: `src/pages/search.astro`, `src/pages/search.json.ts`, `src/scripts/blog-search.js`

## Code Style

- Keep the existing Romanian site visual language and routing style
- Prefer simple relative imports in this repo
- Use content collections for structured content instead of hardcoded article data
- Keep file names in kebab-case
- Keep article slugs in Romanian and URL-safe
- Do not revert unrelated user changes in the worktree

## Blog Guidelines

- Write articles in Romanian
- Focus on practical topics tied to BitDoze services: web design, SEO, hosting, mentenanță, consultanță IT, automatizări
- Prefer clear, useful titles over clever wording
- Open with the user problem, then explain the solution
- Keep paragraphs short and use descriptive H2/H3 headings
- Add categories and up to 3 tags in frontmatter
- Use widgets selectively so the article stays readable
- Every article should have a dedicated 16:9 SVG cover image created for it
- Store article SVG covers under `public/images/blog/`
- Keep SVG covers simple, readable, and branded for BitDoze
- Use short visible text on the SVG, ideally 2 to 5 words
- Internal links should favor:
  - `/servicii`
  - `/servicii/[slug]`
  - `/contact`
  - `/blog`
- If an article uses `series`, keep the frontmatter format as `["Numele seriei", "1"]`
- If an article has an image, prefer a local image path under `public/` or an existing project asset that is safe to publish

## Blog Frontmatter

Use this shape for new posts in `src/content/posts/*.mdx`:

```mdx
---
title: "Titlul articolului"
description: "Rezumat scurt pentru listări și SEO."
date: 2026-04-01
image: "/images/blog/nume-articol.svg"
author: "BitDoze"
categories:
  - SEO
tags:
  - seo local
  - ghid
draft: false
---
```

## Available Widgets

Import is automatic through `MarkdownComponents`, so MDX posts can use these directly:

- `Accordion`
  Example:
  ```mdx
  <Accordion label="Întrebare frecventă" group="faq" expanded="true">
    Conținutul care se deschide în accordion.
  </Accordion>
  ```
- `AmazonProduct`
  Example:
  ```mdx
  <AmazonProduct
    productName="Nume produs"
    productDescription="Descriere scurtă"
    productFeatures={["Caracteristică 1", "Caracteristică 2"]}
    productLink="https://amazon.com/dp/ASIN"
    productImage="https://m.media-amazon.com/images/I/..."
    productRating={4.5}
    importantConsiderations={["Observație importantă"]}
    pros={["Punct forte"]}
    cons={["Limitare"]}
  />
  ```
- `Button`
  Example:
  ```mdx
  <Button
    text="Vezi serviciul"
    link="/servicii/seo"
    variant="solid"
    color="blue"
    icon="arrow-right"
    iconPosition="right"
  />
  ```
- `ListCheck`
  Example:
  ```mdx
  <ListCheck>
    <ul>
      <li>Primul avantaj</li>
      <li>Al doilea avantaj</li>
    </ul>
  </ListCheck>
  ```
- `Notice`
  Example:
  ```mdx
  <Notice type="info" title="Important">
    Mesajul de alertă sau contextul pe care vrei să îl evidențiezi.
  </Notice>
  ```
- `SeriesWidget`
  Example:
  ```mdx
  <SeriesWidget
    currentSlug="cum-planifici-un-site-de-prezentare"
    seriesName="Planificare website"
    seriesPosition="1"
  />
  ```
- `Tab`
  Used inside `Tabs`
  Example:
  ```mdx
  <Tabs>
    <Tab name="Variantă 1">Conținut pentru prima variantă.</Tab>
    <Tab name="Variantă 2">Conținut pentru a doua variantă.</Tab>
  </Tabs>
  ```
- `Tabs`
  Wrapper for multiple `Tab` components
  Example:
  ```mdx
  <Tabs>
    <Tab name="SEO">Conținut SEO.</Tab>
    <Tab name="Design">Conținut design.</Tab>
  </Tabs>
  ```
- `YouTubeEmbed`
  Example:
  ```mdx
  <YouTubeEmbed
    url="https://www.youtube.com/watch?v=VIDEO_ID"
    label="Titlul videoclipului"
  />
  ```

## Content Notes

- Articles should support search well: use concrete nouns, service names, and terms people actually search for
- Related articles are driven by category and tag overlap, so keep those fields intentional
- Blog article URLs are under `/blog/[slug]/`

# Reguli bitdoze.ro pentru articole

Acest fisier rezuma regulile din `AGENTS.md` pe care skill-ul trebuie sa le aplice cand publica articole pe site.

## Unde se scrie

- articolele noi merg in `src/content/posts/`
- imaginile SVG merg in `public/images/blog/`
- URL-urile articolelor sunt sub `/blog/[slug]/`

## Frontmatter

Modelul de baza:

```mdx
---
title: "Titlul articolului"
description: "Rezumat scurt pentru listari si SEO."
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

## Reguli de continut

- scrie in romana
- deschide cu problema cititorului
- continua cu solutia
- paragrafele trebuie sa fie scurte
- foloseste H2 si H3 descriptive
- adauga categorii si maximum 3 tag-uri
- foloseste termeni pe care oamenii chiar ii cauta
- evita slug-urile in engleza cand poti scrie natural in romana

## Link-uri interne preferate

- `/servicii`
- `/servicii/[slug]`
- `/contact`
- `/blog`

## Widget-uri disponibile

### Accordion

```mdx
<Accordion label="Intrebare frecventa" group="faq" expanded="true">
  Continutul care se deschide in accordion.
</Accordion>
```

### Button

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

### ListCheck

```mdx
<ListCheck>
  <ul>
    <li>Primul avantaj</li>
    <li>Al doilea avantaj</li>
  </ul>
</ListCheck>
```

### Notice

```mdx
<Notice type="info" title="Important">
  Mesajul de avertizare sau contextul evidential.
</Notice>
```

### Tabs

```mdx
<Tabs>
  <Tab name="SEO">Continut SEO.</Tab>
  <Tab name="Design">Continut design.</Tab>
</Tabs>
```

### SeriesWidget

```mdx
<SeriesWidget
  currentSlug="cum-planifici-un-site-de-prezentare"
  seriesName="Planificare website"
  seriesPosition="1"
/>
```

### YouTubeEmbed

```mdx
<YouTubeEmbed
  url="https://www.youtube.com/watch?v=VIDEO_ID"
  label="Titlul videoclipului"
/>
```

### AmazonProduct

Foloseste-l rar si doar cand articolul este clar despre un produs.


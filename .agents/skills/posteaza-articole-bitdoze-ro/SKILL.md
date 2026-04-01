---
name: posteaza-articole-bitdoze-ro
description: Creeaza si publica articole de blog pentru site-ul bitdoze.ro. Foloseste acest skill cand utilizatorul cere un articol nou, actualizarea unui articol existent sau publicarea unui post in romana pentru BitDoze, cu fisier MDX in src/content/posts, coperta SVG 16:9 in public/images/blog si widget-uri MDX relevante din AGENTS.md. Skill-ul aplica si un pas final de humanizare pentru a elimina tiparele de scriere AI si a pastra o voce naturala, in romana.
---

# Posteaza articole pe bitdoze.ro

Acest skill este pentru articole de blog publicate direct in repo-ul `bitdoze.ro`.

## Cand se foloseste

Foloseste-l cand cererea implica una dintre situatiile de mai jos:

- redactarea unui articol nou pentru blogul BitDoze
- actualizarea sau extinderea unui articol existent din `src/content/posts/`
- generarea unei coperte SVG pentru un articol
- inserarea de widget-uri MDX in articol
- rescrierea unui text astfel incat sa sune natural, uman si potrivit pentru un site de servicii din Romania

## Rezultatul minim cerut

Pentru un articol nou, livreaza intotdeauna aceste doua fisiere:

- `src/content/posts/<slug>.mdx`
- `public/images/blog/<slug>.svg`

Daca cererea este doar despre editarea unui articol existent, actualizeaza si SVG-ul daca titlul, unghiul sau mesajul vizual nu mai corespund.

## Workflow

1. Citeste `AGENTS.md` din radacina repo-ului si respecta regulile de frontmatter, limbaj, link-uri interne si widget-uri.
2. Verifica rapid articolele existente din `src/content/posts/` ca sa eviti subiecte duplicate si sa alegi categorii sau tag-uri coerente.
3. Stabileste un slug in romana, URL-safe, cu litere mici si cratime.
4. Scrie articolul in romana, cu deschidere axata pe problema cititorului si apoi pe solutie.
5. Include cel putin un widget relevant. Nu pune widget-uri doar ca sa existe.
6. Creeaza o coperta SVG 16:9 simpla, lizibila si branduita BitDoze, cu 2 pana la 5 cuvinte vizibile.
7. Ruleaza un pas final de humanizare dupa regulile din `references/humanizer.md`.
8. Daca este fezabil, valideaza cu `npm run build`.

## Reguli editoriale

- Tonul este clar, practic si local. Scrie pentru firme si antreprenori din Romania.
- Nu scrie ca un comunicat de presa.
- Nu umfla importanta subiectului.
- Evita paragrafele lungi si listele fara rost.
- Foloseste H2 si H3 descriptive, in stil fraza normala, nu title case.
- Favorizeaza exemple concrete, costuri, riscuri, pasi si greseli frecvente.
- Leaga subiectul de serviciile BitDoze: web design, SEO, hosting, mentenanta, consultanta IT, automatizari.
- Include link-uri interne spre `/servicii`, un serviciu relevant, `/contact` sau `/blog` atunci cand ajuta cititorul.

## Widget-uri

Widget-urile disponibile si exemplele lor sunt rezumate in `references/bitdoze-blog-rules.md`.

Reguli de folosire:

- Include cel putin un widget util in fiecare articol nou.
- `Button` este bun pentru CTA spre serviciu sau contact.
- `Notice` merge pentru avertismente, costuri ascunse sau conditii tehnice.
- `ListCheck` este bun pentru liste scurte de beneficii, verificari sau pasi.
- `Accordion` este potrivit pentru FAQ scurt.
- `Tabs` se foloseste doar cand comparatia chiar merita.
- `SeriesWidget` se foloseste numai daca articolul face parte dintr-o serie si frontmatter-ul are `series`.
- Evita `AmazonProduct` daca articolul nu este clar despre un produs.

## Structura recomandata

Pentru articole noi, porneste de la forma de mai jos si adapteaz-o:

```mdx
---
title: "Titlu clar"
description: "Rezumat scurt pentru listari si SEO."
date: 2026-04-01
image: "/images/blog/slug-articol.svg"
author: "BitDoze"
categories:
  - SEO
tags:
  - tag principal
  - tag secundar
draft: false
---

Introdu problema direct, fara preambul generic.

## Ce se intampla in practica

Explica pe scurt contextul real.

<Notice type="info" title="Pe scurt">
  Un detaliu util pe care merita sa il vada imediat.
</Notice>

## Cum abordezi problema

Solutia, cu exemple concrete.

<Button
  text="Vezi serviciile BitDoze"
  link="/servicii"
  variant="solid"
  color="blue"
  icon="arrow-right"
  iconPosition="right"
/>
```

## Humanizare obligatorie

Dupa ce termini draftul, revizueste textul cu `references/humanizer.md`.

Verifica explicit urmatoarele:

- taie formularile care suna umflat, promotional sau vag
- inlocuieste constructiile greoaie cu forme simple precum `este`, `are`, `poate`
- scoate frazele de tip "nu este doar..., este..."
- scoate concluziile generice si optimiste fara informatie concreta
- elimina limbajul de chatbot, disclaimerele si formulele servile
- nu folosi em dash
- nu abuza de bold
- foloseste ghilimele drepte daca apar citate
- variaza ritmul frazelor ca sa nu sune mecanic
- lasa loc pentru opinie, nuanta si observatii reale cand se potrivesc contextului

Textul final trebuie sa sune ca un articol scris de un om care intelege serviciile BitDoze si problemele clientilor locali.

## SVG cover

Coperta trebuie sa respecte aceste reguli:

- format 16:9
- fundal simplu, clar si compatibil cu identitatea vizuala existenta
- maxim 2 pana la 5 cuvinte mari pe coperta
- fara aglomeratie de elemente
- numele fisierului trebuie sa reuseasca exact slug-ul articolului

Template simplu de pornire:

```svg
<svg width="1600" height="900" viewBox="0 0 1600 900" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="1600" height="900" fill="#0B1220"/>
  <circle cx="1320" cy="180" r="220" fill="#1D4ED8" fill-opacity="0.18"/>
  <circle cx="260" cy="760" r="260" fill="#0EA5E9" fill-opacity="0.14"/>
  <text x="120" y="390" fill="white" font-family="Arial, sans-serif" font-size="92" font-weight="700">
    Titlu scurt
  </text>
  <text x="120" y="470" fill="#93C5FD" font-family="Arial, sans-serif" font-size="30">
    bitdoze.ro
  </text>
</svg>
```

Adapteaza culorile si compozitia la subiect, dar pastreaza SVG-ul simplu si lizibil.

## Validare finala

Inainte sa inchei:

- verifica frontmatter-ul
- verifica slug-ul si calea imaginii
- verifica daca articolul are cel putin un widget util
- verifica daca link-urile interne merg spre rute reale
- verifica daca textul a trecut prin pasul de humanizare
- ruleaza `npm run build` daca timpul si mediul permit


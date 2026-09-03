---
name: BitDoze
description: Servicii profesionale de web design, hosting și consultanță IT pentru afacerea ta.
colors:
  paper: "#faf7f0"
  paper-deep: "#f1ebe0"
  card: "#ffffff"
  ink: "#141715"
  muted: "#434b54"
  faint: "#5f686f"
  line: "#e2d9c8"
  line-strong: "#c9bda6"
  moss: "#0e3b2c"
  moss-deep: "#0c211a"
  moss-mist: "#eef3ef"
  moss-light: "#3f6a5d"
  clay: "#c93a00"
  clay-deep: "#a32e00"
  clay-light: "#ff6b2c"
  ember: "#ff4d00"
  ember-deep: "#c93a00"
  ember-ink: "#16100a"
  ember-soft: "#ff6b2c"
  ink-deep: "#0e1210"
  pine: "#0c211a"
  success: "#2f6b4f"
  warning: "#9a6a1a"
  error: "#a83a2e"
  info: "#2f5d6b"
  dark-bg: "#0e1210"
  dark-bg-alt: "#161c19"
  dark-text: "#f2efe6"
  dark-text-muted: "#c2bcae"
typography:
  display:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(2.4rem, 5vw, 4rem)"
    fontWeight: 560
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(1.8rem, 3.4vw, 2.6rem)"
    fontWeight: 560
    lineHeight: 1.12
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1.2rem"
    fontWeight: 700
    lineHeight: 1.3
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "ui-monospace, Menlo, Consolas, monospace"
    fontSize: "0.72rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.14em"
rounded:
  sm: "4px"
  md: "6px"
  lg: "10px"
  xl: "14px"
  2xl: "16px"
  3xl: "20px"
  full: "9999px"
spacing:
  section-sm: "48px"
  section: "72px"
  section-lg: "96px"
  container: "1216px"
  container-pad: "20px"
components:
  button-primary:
    backgroundColor: "{colors.moss}"
    textColor: "#ffffff"
    rounded: "{rounded.md}"
    padding: "11px 20px"
  button-primary-hover:
    backgroundColor: "{colors.moss-deep}"
    textColor: "#ffffff"
    rounded: "{rounded.md}"
    padding: "11px 20px"
  button-secondary:
    backgroundColor: "{colors.card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "11px 20px"
  button-accent:
    backgroundColor: "{colors.clay}"
    textColor: "#ffffff"
    rounded: "{rounded.md}"
    padding: "11px 20px"
  button-accent-hover:
    backgroundColor: "{colors.clay-deep}"
    textColor: "#ffffff"
    rounded: "{rounded.md}"
    padding: "11px 20px"
  card:
    backgroundColor: "{colors.card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "24px"
  badge:
    backgroundColor: "{colors.card}"
    textColor: "{colors.muted}"
    rounded: "{rounded.sm}"
    padding: "3px 10px"
---

# Design System: BitDoze

## 1. Overview

**Creative North Star: "Atelierul care se vede"**

BitDoze arată ca un atelier care își ștampilează lăzile: banc de lucru din cerneală adâncă, hârtie caldă pentru citit și portocaliu-ember pentru momentul de acțiune. Hero și portofoliu sunt drenșate în ink, serviciile sunt carduri vizuale mari cu umbră tare, CTA e drenșat în ember.

Sistemul respinge explicit clișeul SaaS: fără gradient mov-albastru, fără hero cu metrici mari, fără grilă nesfârșită de carduri identice cu iconiță plus titlu plus text. Încrederea vine din transparență și structură simplă, nu din decor.

**Key Characteristics:**
- Hârtie caldă cu strat tonal subtil, nu alb steril
- Butoane solide cu chenar de 2px, primarul e ember cu text cerneală
- Carduri vizuale mari cu header grafic și preț-pilulă, nu rânduri subțiri
- Serif masiv pentru titluri (până la 5rem), sans îngroșat pentru rest
- Ember folosit decisiv pentru CTA, prețuri și hover — vocea, nu decorul

## 2. Colors

Sursă canonică: `src/styles/global.css` (`:root`). Valorile de mai jos
reflectă implementarea live „bold artisanal" (redesign ink + ember).

Banc de lucru din cerneală adâncă, hârtie caldă pentru citit și
portocaliu-ember pentru momentul de acțiune.

### Primary
- **Ember** (#ff4d00): culoarea acțiunii principale. Topbar, sticky CTA mobil, badge-uri. Niciodată pentru text pe fundal deschis (contrast ~3.3:1) — doar suprafețe cu text `ember-ink`.
- **Ember adânc** (#c93a00): buton primar pe light, linkuri în prose. Contrast ~4.6:1 pe hârtie — ok pentru text.
- **Ember moale** (#ff6b2c): accent pe dark mode.
- **Mușchi** (#0e3b2c): suprafețe de încredere secundare, `theme-color`. Hover: mușchi noapte (#0c211a).

### Secondary
- **Cărămiziu / Clay** (#c93a00): alias al ember-ului adânc, păstrat pentru compatibilitate (`--color-clay`). Folosit rar, ca semnătură.
- **Cărămiziu adânc** (#a32e00): hover pentru butonul primar.

### Tertiary
- **Mușchi cerneală** (#eef3ef): text deschis pe fundal verde închis.

### Neutral
- **Hârtie caldă** (#faf7f0): fundalul implicit al paginii.
- **Hârtie adâncă** (#f1ebe0): fundal alternativ pentru benzi și miniaturi portofoliu.
- **Alb card** (#ffffff): fundalul cardurilor.
- **Cerneală** (#141715): text principal, borduri de 2px.
- **Cerneală stinsă** (#434b54): text secundar și paragrafe lungi.
- **Ceață** (#5f686f): meta-informații, indexuri de listă.
- **Linie** (#e2d9c8): separatoare și borduri.
- **Linie puternică** (#c9bda6): borduri pentru butoane secundare și hover.
- **Noapte** (#0e1210): fundal dark mode.
- **Noapte ridicată** (#161c19): card dark mode.
- **Pergament nocturn** (#f2efe6): text dark mode.

### Named Rules
**The Rare Clay Rule.** Cărămiziul apare pe sub 10% din orice ecran. Raritatea lui este semnalul: dacă totul e accent, nimic nu e accent.
**The Paper First Rule.** Fundalul implicit este întotdeauna hârtie caldă, niciodată alb pur sau gri rece.

## 3. Typography

**Display Font:** Fraunces (cu Georgia, serif)
**Body Font:** Inter (cu system-ui, sans-serif)
**Label/Mono Font:** ui-monospace, Menlo, Consolas (pentru kicker, indexuri, meta)

**Character:** Serif cu personalitate caldă doar pentru afirmații mari, sans neutru și lizibil pentru tot restul. Contrastul vine din scară și greutate, nu din familii multe.

### Hierarchy
- **Display** (640, clamp(2.4rem, 5vw, 4rem), 1.05): titluri hero și de pagină. Fraunces, echilibrat pe mai multe rânduri (`text-wrap: balance`).
- **Headline** (640, clamp(1.8rem, 3.4vw, 2.6rem), 1.12): titluri de secțiune. Fraunces.
- **Title** (700, 1.2rem, 1.3): titluri mici de card și subsecțiuni. Inter bold.
- **Body** (400, 1rem, 1.65): paragrafe și descrieri. Lungime maximă 68ch, culoare stinsă pentru text lung.
- **Label** (800, 0.78rem, 0.06em, uppercase): kicker tip ștampilă (pill ink + bulină ember); mono doar pentru meta/indexuri.

### Named Rules
**The Two Voices Rule.** Fraunces vorbește doar în display și headline. Orice altceva în serif diluează vocea.
**The Balance Rule.** Titlurile mari folosesc întotdeauna echilibrare vizuală a rândurilor, fără orfani.

## 4. Elevation

Sistem bold: cardurile au border ink de 2px la repaus, fără umbră. Hover-ul
adaugă hard shadow (`5px 5px 0 ink`) + translate subtil — ca o ștampilă
apăsată, nu ca un card SaaS care plutește. Umbrele blurry există în vocabular
dar sunt rezervate pentru stări care chiar se ridică: meniu mobil, dialog,
consent, tooltip.

### Shadow Vocabulary
- **Ridicare mică** (`box-shadow: 0 1px 2px rgba(20, 26, 22, 0.06)`): separare minimă pe fundal hârtie.
- **Ridicare medie** (`box-shadow: 0 2px 8px rgba(20, 26, 22, 0.08)`): meniuri derulante și panouri mici.
- **Ridicare mare** (`box-shadow: 0 8px 24px rgba(20, 26, 22, 0.1)`): dialoguri și panouri de consimțământ.
- **Ridicare maximă** (`box-shadow: 0 16px 40px rgba(20, 26, 22, 0.12)`): cazuri rare, suprapuneri pline.

### Named Rules
**The Bold-At-Rest Rule.** Cardurile au border de 2px ink și hard shadow la hover (`5px 5px 0 ink`, translate `-1px/-1px`). Nu ridicări blurry tip SaaS.

## 5. Components

Implementarea live: `src/styles/global.css` (`.btn`, `.card`, `.kicker`, `.badge`).

### Buttons
Solide și hotărâte: fără lift, fără ripple, tranziție scurtă doar pe culoare.
- **Shape:** rază 12px, padding `0.95rem 1.6rem`, `min-height 50px`, font 700 de 1rem, border 2px transparent
- **Primary:** ember adânc (#c93a00) cu text alb; hover #a32e00. Pe dark: ember (#ff4d00) cu text ember-ink
- **Hover / Focus:** focus vizibil cu contur ember-deep de 3px la 2px distanță (`:focus-visible` global)
- **Secondary / Outline / Ghost:** transparent cu bordură de 2px; hover umple spre ink
- **Accent (blog widget):** ink cu text hârtie; variantele de brand sunt `primary / secondary / accent` (vezi `Button.astro`)

### Chips
- **Style:** pill (999px) cu border ink de 1.5–2px, fundal hârtie, text ink 800
- **State:** varianta primară (fundal ink, text hârtie), varianta accent (fundal ember, text ember-ink)

### Cards / Containers
- **Corner Style:** 16px, border 2px ink, fără umbră la repaus
- **Background:** alb card pe hârtie caldă, hârtie adâncă pentru miniaturi portofoliu
- **Shadow Strategy:** hover `5px 5px 0 ink` + translate; pe dark, umbră neagră
- **Internal Padding:** 24px standard, containere la 1216px maxim cu 20px margine laterală

### Kicker
- **Style:** pill sans 800 (`0.78rem`, uppercase, `0.06em`), fundal ink cu bulină ember, text hârtie. Pe dark se inversează. Nu e mono cu linie — e ștampilă.

### Inputs / Fields
- **Style:** fundal hârtie, bordură ink 2px, rază 12px, text cerneală
- **Focus:** contur vizibil ember-deep de 3px
- **Error / Disabled:** roșu cărămiziu închis (#a83a2e) pentru eroare, text ceață pentru dezactivat

### Navigation
Header lipicios cu fundal hârtie, border-bottom 3px ink + `box-shadow 0 4px 0 ember`, logo SVG la stânga, navigație Inter 750, CTA primar mic la dreapta. Linkul activ e pill ember. Pe mobil, meniu tip panou ink cu linkuri serif mari. Sticky CTA mobil spre /contact (ascuns pe /contact și /multumim).

### Signature Component
Cardul îndrăzneț cu border 2px + hard shadow la hover, preț-pilulă și header grafic. Alternativa deliberată la grila de carduri plate identice.

## 6. Do's and Don'ts

### Do:
- **Do** păstrează fundalul pe hârtie caldă (#faf7f0) cu text cerneală (#141715) pentru contrast calm și lizibil.
- **Do** folosește ember (#ff4d00) decisiv pentru CTA și cărămiziu rar, ca semnătură. Niciodată ember pentru text pe deschis — doar ember-deep.
- **Do** preferă carduri bold cu border 2px + hard shadow la hover, nu suprafețe plate invizibile.
- **Do** limitează Fraunces la display și headline, cu echilibrare a rândurilor (`text-wrap: balance`).
- **Do** păstrează colțurile 12–16px și bordurile ink de 2px ca semnătură de atelier.

### Don't:
- **Don't** folosi gradient mov-albastru sau text cu gradient. Interzis prin anti-referința SaaS din PRODUCT.md.
- **Don't** construi hero cu metrici mari de tipul număr uriaș plus etichetă mică. Folosește dovada reală: 50+ proiecte, răspuns în 24h, suport în română.
- **Don't** repeta grila nesfârșită de carduri identice cu iconiță plus titlu plus text. Variază cu rânduri, liste și compoziții asimetrice.
- **Don't** adăuga bordură laterală colorată mai groasă de 1px ca accent pe carduri sau alerte.
- **Don't** pune etichetă mică uppercase cu tracking larg deasupra fiecărei secțiuni. Un singur kicker ca sistem de brand e voce, repetarea pe fiecare secțiune e schelă AI.
- **Don't** folosi glassmorphism decorativ cu blur și carduri de sticlă. Rar și cu scop, sau deloc.

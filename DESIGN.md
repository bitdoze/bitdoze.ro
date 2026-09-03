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

Hârtie caldă cu cerneală moale, un verde adânc care poartă încrederea și un cărămiziu care marchează momentul de acțiune.

### Primary
- **Mușchi adânc** (#1e3a32): culoarea acțiunii principale și a suprafețelor de încredere. Butoane primare, header CTA, bloc CTA verde închis.
- **Mușchi noapte** (#132720): starea hover pentru verde și fundalul blocului CTA mare.
- **Mușchi luminos** (#3f6a5d): variație pentru iconițe și legături discrete pe fundal deschis.

### Secondary
- **Cărămiziu** (#b0492b): accent rar pentru hover pe titluri de servicii și portofoliu, badge accent, linie kicker.
- **Cărămiziu adânc** (#93391f): hover pentru butonul accent.

### Tertiary
- **Salvie pală** (#eef3ef): text deschis pe fundal verde închis.
- **Cărămiziu deschis** (#c96a4b): variație luminoasă pentru stări secundare ale accentului.

### Neutral
- **Hârtie caldă** (#faf8f4): fundalul implicit al paginii.
- **Hârtie adâncă** (#f2ede4): fundal alternativ pentru benzi și miniaturi portofoliu.
- **Alb card** (#ffffff): fundalul cardurilor plate.
- **Cerneală** (#181b20): text principal.
- **Cerneală stinsă** (#5c636e): text secundar și paragrafe lungi.
- **Ceață** (#8b919b): meta-informații, indexuri de listă, placeholder accesibil.
- **Linie** (#e4dccf): separatoare hairline și borduri de card.
- **Linie puternică** (#cfc3ae): borduri pentru butoane secundare și stări hover.
- **Noapte** (#131514): fundal dark mode.
- **Noapte ridicată** (#1c1f1d): card dark mode.
- **Pergament nocturn** (#ece7db): text dark mode.

### Named Rules
**The Rare Clay Rule.** Cărămiziul apare pe sub 10% din orice ecran. Raritatea lui este semnalul: dacă totul e accent, nimic nu e accent.
**The Paper First Rule.** Fundalul implicit este întotdeauna hârtie caldă, niciodată alb pur sau gri rece.

## 3. Typography

**Display Font:** Fraunces (cu Georgia, serif)
**Body Font:** Inter (cu system-ui, sans-serif)
**Label/Mono Font:** ui-monospace, Menlo, Consolas (pentru kicker, indexuri, meta)

**Character:** Serif cu personalitate caldă doar pentru afirmații mari, sans neutru și lizibil pentru tot restul. Contrastul vine din scară și greutate, nu din familii multe.

### Hierarchy
- **Display** (560, clamp(2.4rem, 5vw, 4rem), 1.05): titluri hero și de pagină. Fraunces, echilibrat pe mai multe rânduri.
- **Headline** (560, clamp(1.8rem, 3.4vw, 2.6rem), 1.12): titluri de secțiune. Fraunces.
- **Title** (700, 1.2rem, 1.3): titluri mici de card și subsecțiuni. Inter bold.
- **Body** (400, 1rem, 1.65): paragrafe și descrieri. Lungime maximă 68ch, culoare stinsă pentru text lung.
- **Label** (600, 0.72rem, 0.14em, uppercase): kicker cu linie cărămizie de 32px, indexuri de rând serviciu, meta portofoliu.

### Named Rules
**The Two Voices Rule.** Fraunces vorbește doar în display și headline. Orice altceva în serif diluează vocea.
**The Balance Rule.** Titlurile mari folosesc întotdeauna echilibrare vizuală a rândurilor, fără orfani.

## 4. Elevation

Sistem plat implicit cu adâncime subtil structurală. Cardurile stau pe hârtie prin bordură hairline, fără umbră la repaus. Hover-ul îngroașă doar culoarea bordurii, nu ridică suprafața. Umbrele există în vocabular dar sunt rezervate pentru stări care chiar se ridică: meniu mobil, dialog, consent, tooltip.

### Shadow Vocabulary
- **Ridicare mică** (`box-shadow: 0 1px 2px rgba(20, 26, 22, 0.06)`): separare minimă pe fundal hârtie.
- **Ridicare medie** (`box-shadow: 0 2px 8px rgba(20, 26, 22, 0.08)`): meniuri derulante și panouri mici.
- **Ridicare mare** (`box-shadow: 0 8px 24px rgba(20, 26, 22, 0.1)`): dialoguri și panouri de consimțământ.
- **Ridicare maximă** (`box-shadow: 0 16px 40px rgba(20, 26, 22, 0.12)`): cazuri rare, suprapuneri pline.

### Named Rules
**The Flat-By-Default Rule.** Suprafețele sunt plate la repaus. Umbra apare doar ca răspuns la stare: hover pe meniu, deschidere dialog, focus ridicat.

## 5. Components

### Buttons
Plate și hotărâte: solide, fără lift, fără ripple, tranziție scurtă doar pe culoare.
- **Shape:** colțuri ușor rotunjite (6px)
- **Primary:** verde mușchi (#1e3a32) cu text alb, padding 11px 20px, font 600 de 0.95rem
- **Hover / Focus:** verde noapte (#132720). Focus vizibil cu contur verde de 2px la 2px distanță.
- **Secondary / Ghost:** transparent cu bordură linie puternică (#cfc3ae), text cerneală. Hover îngroașă bordura spre cerneală cu fundal slab de 4%.
- **Accent:** cărămiziu (#b0492b) cu text alb, hover cărămiziu adânc (#93391f).

### Chips
- **Style:** fundal transparent sau alb card, text stins (#5c636e), bordură hairline (1px solid #e4dccf), rază mică (4px)
- **State:** varianta primară colorează textul în verde mușchi cu bordură la 35% opacitate, varianta accent în cărămiziu la 35% opacitate.

### Cards / Containers
- **Corner Style:** rotunjire confortabilă (10px)
- **Background:** alb card pe hârtie caldă, hârtie adâncă pentru miniaturi portofoliu
- **Shadow Strategy:** fără umbră la repaus, vezi Elevation
- **Border:** hairline de 1px în culoarea linie (#e4dccf), hover spre linie puternică
- **Internal Padding:** 24px standard, containere la 1216px maxim cu 20px margine laterală

### Inputs / Fields
- **Style:** fundal alb card, bordură linie, rază 6px, text cerneală
- **Focus:** bordură verde mușchi cu contur vizibil de 2px
- **Error / Disabled:** roșu cărămiziu închis (#a83a2e) pentru eroare, text ceață pentru dezactivat

### Navigation
Header lipicios cu fundal hârtie, logo SVG la stânga, navigație centrală Inter 500, CTA primar mic la dreapta. Legătura activă primește subliniere sau greutate mai mare. Pe mobil, meniu tip panou plat cu aceeași ierarhie, fără animație de alunecare agresivă.

### Signature Component
Rândul de serviciu: grilă cu index mono, titlu serif de 1.45rem și meta la dreapta, separat prin linie de 1px sus. Hover colorează titlul în cărămiziu cu fundal slab de 2.5%. Este alternativa deliberată la grila de carduri identice.

## 6. Do's and Don'ts

### Do:
- **Do** păstrează fundalul pe hârtie caldă (#faf8f4) cu text cerneală (#181b20) pentru contrast calm și lizibil.
- **Do** folosește verde mușchi (#1e3a32) pentru acțiunea principală și cărămiziu (#b0492b) rar, ca semnătură.
- **Do** preferă rânduri cu separatoare hairline în locul cardurilor când listezi servicii sau proiecte.
- **Do** limitează Fraunces la display și headline, cu echilibrare a rândurilor.
- **Do** păstrează colțurile mici (4-10px) și suprafețele plate cu bordură de 1px.

### Don't:
- **Don't** folosi gradient mov-albastru sau text cu gradient. Interzis prin anti-referința SaaS din PRODUCT.md.
- **Don't** construi hero cu metrici mari de tipul număr uriaș plus etichetă mică. Folosește dovada reală: 50+ proiecte, răspuns în 24h, suport în română.
- **Don't** repeta grila nesfârșită de carduri identice cu iconiță plus titlu plus text. Variază cu rânduri, liste și compoziții asimetrice.
- **Don't** adăuga bordură laterală colorată mai groasă de 1px ca accent pe carduri sau alerte.
- **Don't** pune etichetă mică uppercase cu tracking larg deasupra fiecărei secțiuni. Un singur kicker ca sistem de brand e voce, repetarea pe fiecare secțiune e schelă AI.
- **Don't** folosi glassmorphism decorativ cu blur și carduri de sticlă. Rar și cu scop, sau deloc.

export interface Service {
  title: string;
  description: string;
  icon: string;
  link?: string;
}

export const services: Service[] = [
  {
    title: "Web Design",
    description: "Creăm site-uri web captivante și optimizate care transformă vizitatorii în clienți fideli și îți consolidează identitatea brandului în mediul digital.",
    icon: "mdi:web",
    link: "/servicii/web-design",
  },
  {
    title: "Hosting",
    description: "Soluții de găzduire web ultra-rapide și securizate, cu uptime garantat 99.9%, pentru ca site-ul tău să fie mereu disponibil și să se încarce instant.",
    icon: "mdi:server",
    link: "/servicii/hosting",
  },
  {
    title: "Mentenanta Website-uri",
    description: "Asigurăm performanța, securitatea și actualizarea constantă a site-ului tău, permițându-ți să te concentrezi pe afacerea ta în timp ce noi ne ocupăm de prezența ta online.",
    icon: "mdi:tools",
    link: "/servicii/mentenanta",
  },
  {
    title: "Consultanta IT",
    description: "Expertiză tehnică de top și soluții IT strategice personalizate care optimizează procesele de business, reduc costurile și accelerează creșterea afacerii tale.",
    icon: "mdi:laptop",
    link: "/servicii/consultanta-it",
  },
  {
    title: "SEO",
    description: "Strategii avansate de optimizare pentru motoarele de căutare care îți cresc vizibilitatea online, atrag trafic de calitate și generează mai mulți clienți pentru afacerea ta.",
    icon: "mdi:magnify",
    link: "/servicii/seo",
  },
  {
    title: "Marketing Digital",
    description: "Campanii de marketing digital integrate și bazate pe date, create pentru a atrage clienți noi, a consolida loialitatea și a maximiza ROI-ul investiției tale în marketing.",
    icon: "mdi:bullhorn",
    link: "/servicii/marketing",
  },
  {
    title: "Consultanta AI",
    description: "Transformă digital afacerea ta cu soluții AI personalizate care automatizează procese, oferă insights valoroase din date și creează experiențe client inovatoare pentru avantaj competitiv.",
    icon: "mdi:robot",
    link: "/servicii/consultanta-ai",
  },
];
export interface Service {
  title: string;
  description: string;
  icon: string;
  link?: string;
}

export const services: Service[] = [
  {
    title: "Web Design",
    description: "Servicii profesionale de design web pentru a îmbunătăți prezența online și identitatea brandului.",
    icon: "mdi:web",
    link: "/servicii/web-design",
  },
  {
    title: "Hosting",
    description: "Soluții de găzduire web fiabile și performante pentru site-ul tău.",
    icon: "mdi:server",
    link: "/servicii/hosting",
  },
  {
    title: "Mentenanta Website-uri",
    description: "Servicii complete de întreținere și actualizare a site-urilor web pentru funcționalitate optimă.",
    icon: "mdi:tools",
    link: "/servicii/mentenanta",
  },
  {
    title: "Consultanta IT",
    description: "Asistență și consultanță IT pentru afacerea ta, oferind soluții personalizate nevoilor tale.",
    icon: "mdi:laptop",
    link: "/servicii/consultanta-it",
  },
  {
    title: "SEO",
    description: "Optimizare pentru motoarele de căutare pentru a îmbunătăți poziționarea și traficul organic.",
    icon: "mdi:magnify",
    link: "/servicii/seo",
  },
  {
    title: "Marketing",
    description: "Strategii de marketing digital pentru a atinge publicul țintă și a stimula creșterea afacerii.",
    icon: "mdi:bullhorn",
    link: "/servicii/marketing",
  },
  {
    title: "Consultanta AI",
    description: "Consultanță și implementare de soluții bazate pe inteligență artificială pentru afacerea ta.",
    icon: "mdi:robot",
    link: "/servicii/consultanta-ai",
  },
];
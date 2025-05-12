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
    link: "/services/web-design",
  },
  {
    title: "Hosting",
    description: "Soluții de găzduire web fiabile și performante pentru site-ul tău.",
    icon: "mdi:server",
    link: "/services/hosting",
  },
  {
    title: "Mentenanta Website-uri",
    description: "Servicii complete de întreținere și actualizare a site-urilor web pentru funcționalitate optimă.",
    icon: "mdi:tools",
    link: "/services/mentenanta",
  },
  {
    title: "Consultanta IT",
    description: "Asistență și consultanță IT pentru afacerea ta, oferind soluții personalizate nevoilor tale.",
    icon: "mdi:laptop",
    link: "/services/consultanta-it",
  },
  {
    title: "SEO",
    description: "Optimizare pentru motoarele de căutare pentru a îmbunătăți poziționarea și traficul organic.",
    icon: "mdi:magnify",
    link: "/services/seo",
  },
  {
    title: "Marketing",
    description: "Strategii de marketing digital pentru a atinge publicul țintă și a stimula creșterea afacerii.",
    icon: "mdi:bullhorn",
    link: "/services/marketing",
  },
  {
    title: "Consultanta AI",
    description: "Consultanță și implementare de soluții bazate pe inteligență artificială pentru afacerea ta.",
    icon: "mdi:robot",
    link: "/services/consultanta-ai",
  },
];
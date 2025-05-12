export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage?: string;
  links: {
    twitter?: string;
    github?: string;
    linkedin?: string;
    facebook?: string;
  };
  portfolio?: {
    title: string;
    description: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "BitDoze",
  description: "Servicii profesionale de web design, hosting și consultanță IT pentru afacerea ta.",
  url: "https://bitdoze.ro",
  ogImage: "/images/og-image.jpg",
  links: {
    linkedin: "https://linkedin.com/company/bitdoze",
    facebook: "https://facebook.com/bitdoze",
  },
  portfolio: {
    title: "Portofoliu",
    description: "Explorați o selecție din proiectele noastre recente și descoperiți soluțiile digitale personalizate pe care le-am creat pentru clienții noștri.",
  },
};
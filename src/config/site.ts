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
};
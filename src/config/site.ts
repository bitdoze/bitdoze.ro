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
  name: "Business Name",
  description: "A professional business template for your company website.",
  url: "https://yourdomain.com",
  ogImage: "/images/og-image.jpg",
  links: {
    twitter: "https://twitter.com/yourbusiness",
    github: "https://github.com/yourbusiness",
    linkedin: "https://linkedin.com/company/yourbusiness",
    facebook: "https://facebook.com/yourbusiness",
  },
};
export interface ImageAssets {
  hero: {
    main: string;
    about: string;
    services: string;
    contact: string;
  };
  logos: {
    site: string;
    partnerLogos: string[];
  };
  team: {
    [key: string]: string;
  };
  services: {
    [key: string]: string;
  };
}

export const imageAssets: ImageAssets = {
  hero: {
    main: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    about: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    services: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=2070&auto=format&fit=crop",
    contact: "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074&auto=format&fit=crop"
  },
  logos: {
    site: "/logo.svg",
    partnerLogos: [
      "/partners/partner1.svg",
      "/partners/partner2.svg",
      "/partners/partner3.svg",
      "/partners/partner4.svg"
    ]
  },
  team: {
    "jane-doe": "/images/team/jane-doe.jpg",
    "john-smith": "/images/team/john-smith.jpg",
    "emily-chen": "/images/team/emily-chen.jpg",
    "michael-brown": "/images/team/michael-brown.jpg"
  },
  services: {
    "web-design": "/images/services/web-design.jpg",
    "digital-marketing": "/images/services/digital-marketing.jpg",
    "content-creation": "/images/services/content-creation.jpg",
    "seo": "/images/services/seo.jpg",
    "brand-strategy": "/images/services/brand-strategy.jpg",
    "data-analytics": "/images/services/data-analytics.jpg"
  }
};
export interface CompanyConfig {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  cui: string;
  logo: {
    text: string;
    icon: string;
  };
  contact: {
    email: string;
    phone: string;
    address: {
      street: string;
      city: string;
      state: string;
      zip: string;
      country: string;
    };
  };
  socialMedia: {
    platform: string;
    url: string;
    icon: string;
  }[];
}

export const companyConfig: CompanyConfig = {
  name: "BitDoze",
  legalName: "BITDOZE WEB CONS S.R.L",
  tagline: "Site-uri care aduc clienți — preț fix, răspuns în 24h.",
  description:
    "Atelier web din Argeș: site-uri rapide, magazine online și mentenanță. Lucrezi direct cu omul care îți face site-ul.",
  cui: "28708326",
  logo: {
    text: "BitDoze",
    icon: "mdi:lightning-bolt",
  },
  contact: {
    email: "office@bitdoze.ro",
    phone: "+40751018879",
    address: {
      street: "Sat Ciocăneşti Com. Călineşti, Nr.81",
      city: "Călineşti",
      state: "Argeş",
      zip: "117197",
      country: "România",
    },
  },
  socialMedia: [
    {
      platform: "Facebook",
      url: "https://facebook.com/bitdoze",
      icon: "mdi:facebook",
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/company/bitdoze",
      icon: "mdi:linkedin",
    },
    {
      platform: "Instagram",
      url: "https://instagram.com/bitdoze",
      icon: "mdi:instagram",
    },
  ],
};

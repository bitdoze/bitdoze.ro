export interface CompanyConfig {
  name: string;
  tagline: string;
  description: string;
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
  name: "BITDOZE WEB CONS S.R.L",
  tagline: "Soluții profesionale pentru afacerea ta online",
  description:
    "Oferim servicii complete de web design, hosting și consultanță IT pentru a ajuta afacerea ta să crească în mediul digital.",
  logo: {
    text: "BitDoze",
    icon: "mdi:lightning-bolt",
  },
  contact: {
    email: "office@bitdoze.ro",
    phone: "",
    address: {
      street: "Sat Ciocăneşti Com. Călineşti, Nr.81",
      city: "Călineşti",
      state: "Argeş",
      zip: "",
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

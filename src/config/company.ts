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

export interface CTAConfig {
  title: string;
  description: string;
  primaryAction: {
    text: string;
    href: string;
  };
  secondaryAction?: {
    text: string;
    href: string;
  };
}

export const companyConfig: CompanyConfig = {
  name: "Business Template",
  tagline: "Elevate your business with our professional services",
  description: "We provide comprehensive solutions to help your business grow and succeed in today's competitive market.",
  logo: {
    text: "YourBrand",
    icon: "mdi:lightning-bolt",
  },
  contact: {
    email: "contact@yourbusiness.com",
    phone: "+1 (555) 123-4567",
    address: {
      street: "123 Business Street",
      city: "Enterprise City",
      state: "State",
      zip: "12345",
      country: "Country",
    },
  },
  socialMedia: [
    {
      platform: "Twitter",
      url: "https://twitter.com/yourbusiness",
      icon: "mdi:twitter",
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/company/yourbusiness",
      icon: "mdi:linkedin",
    },
    {
      platform: "Facebook",
      url: "https://facebook.com/yourbusiness",
      icon: "mdi:facebook",
    },
    {
      platform: "Instagram",
      url: "https://instagram.com/yourbusiness",
      icon: "mdi:instagram",
    },
  ],
};

export const ctaConfig: CTAConfig = {
  title: "Ready to transform your business?",
  description: "Get started today and see the difference our services can make for your business growth and success.",
  primaryAction: {
    text: "Get Started",
    href: "/contact",
  },
  secondaryAction: {
    text: "Learn More",
    href: "/services",
  },
};
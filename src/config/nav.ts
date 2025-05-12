export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
}

export interface NavConfig {
  mainNav: NavItem[];
  footerNav: {
    company: NavItem[];
    resources: NavItem[];
    legal: NavItem[];
  };
  ctaButton?: {
    text: string;
    href: string;
  };
}

export const navConfig: NavConfig = {
  mainNav: [
    {
      title: "Acasă",
      href: "/",
    },
    {
      title: "Despre",
      href: "/about",
    },
    {
      title: "Servicii",
      href: "/servicii",
    },
    {
      title: "Portofoliu",
      href: "/portofoliu",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],
  ctaButton: {
    text: "Contactează-ne",
    href: "/contact",
  },
  footerNav: {
    company: [
      {
        title: "Despre Noi",
        href: "/about",
      },
      {
        title: "Echipa",
        href: "/team",
      },
      {
        title: "Cariere",
        href: "/careers",
      },
      {
        title: "Contact",
        href: "/contact",
      },
    ],
    resources: [
      {
        title: "Servicii",
        href: "/servicii",
      },
      {
        title: "Portofoliu",
        href: "/portofoliu",
      },
      {
        title: "Blog",
        href: "/blog",
      },
      {
        title: "Întrebări Frecvente",
        href: "/faq",
      },
      {
        title: "Resurse",
        href: "/resources",
      },
    ],
    legal: [
      {
        title: "Politica de Confidențialitate",
        href: "/privacy",
      },
      {
        title: "Termeni și Condiții",
        href: "/terms",
      },
      {
        title: "Politica de Cookie-uri",
        href: "/cookies",
      },
    ],
  },
};

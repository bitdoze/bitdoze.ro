import { siteConfig } from "./site";
import { companyConfig } from "./company";
import { imageAssets } from "./assets";
import { getCtaSection } from "./cta";

// Page definitions
export interface PageConfig {
  title: string;
  description: string;
  ogType?: "website" | "article";
  ogImage?: string;
  sections: Section[];
}

export interface HeroSection {
  type: "hero";
  title: string;
  subtitle: string;
  ctaPrimary: {
    text: string;
    link: string;
  };
  ctaSecondary?: {
    text: string;
    link: string;
  };
  imageUrl: string;
  stats?: {
    value: string;
    label: string;
  }[];
}

export interface WelcomeSection {
  type: "welcome";
  title: string;
  subtitle: string;
  features: {
    icon: string;
    title: string;
    description: string;
    iconColor?: string;
  }[];
  ctas: {
    primary: {
      text: string;
      link: string;
    };
    secondary?: {
      text: string;
      link: string;
    };
    welcome?: {
      text: string;
      link: string;
    }[];
  };
  image: string;
  badge?: string;
}

export interface ServicesSection {
  type: "services";
  title: string;
  subtitle: string;
  showAllServices: boolean;
  limit?: number;
  cta?: {
    text: string;
    link: string;
  };
}

export interface TestimonialsSection {
  type: "testimonials";
  title: string;
  subtitle: string;
  testimonials: {
    content: string;
    author: string;
    role: string;
    company: string;
    avatar: string;
  }[];
}

export interface CTASection {
  type: "cta";
  title: string;
  subtitle: string;
  ctaPrimary: {
    text: string;
    link: string;
  };
  ctaSecondary?: {
    text: string;
    link: string;
  };
  trustedBy?: string;
}

export interface AboutHeroSection {
  type: "aboutHero";
  title: string;
  subtitle: string;
  imageUrl: string;
}

export interface StorySection {
  type: "story";
  title: string;
  subtitle: string;
  content: string;
  image: string;
  stats?: { value: string; label: string }[];
}

export interface ValuesSection {
  type: "values";
  title: string;
  subtitle: string;
  values: {
    title: string;
    description: string;
    icon: string;
  }[];
}

export interface TeamSection {
  type: "team";
  title: string;
  subtitle: string;
  team: {
    name: string;
    role: string;
    bio: string;
    image: string;
    socialMedia?: { platform: string; url: string; icon: string }[];
  }[];
  sideProjectsTitle?: string;
  sideProjects?: { name: string; proof: string; url: string }[];
}

export interface ServicesListSection {
  type: "servicesList";
  title: string;
  subtitle: string;
  showAllServices: boolean;
  cta?: {
    text: string;
    link: string;
  };
}

export interface ProcessSection {
  type: "process";
  title: string;
  subtitle: string;
  steps: {
    number: number;
    title: string;
    description: string;
    icon?: string;
  }[];
}

export interface FAQSection {
  type: "faq";
  title: string;
  subtitle: string;
  questions: {
    question: string;
    answer: string;
  }[];
}

export interface ContactHeroSection {
  type: "contactHero";
  title: string;
  subtitle: string;
  buttonText?: string;
}

export interface ContactInfoSection {
  type: "contactInfo";
  title: string;
  subtitle: string;
  sectionTitle?: string;
  contactInfo: {
    title: string;
    details: string;
    icon: string;
    link?: string;
  }[];
}

export interface ContactFormSection {
  type: "contactForm";
  title: string;
  subtitle: string;
  fields: {
    type: "text" | "email" | "tel" | "select" | "textarea" | "checkbox";
    id: string;
    name: string;
    label: string;
    required: boolean;
    options?: { label: string; value: string }[];
  }[];
  submitText: string;
}

export interface MapSection {
  type: "map";
  title: string;
  subtitle: string;
  address: string;
}

export interface BusinessHoursSection {
  type: "businessHours";
  title: string;
  subtitle: string;
  hours: { days: string; hours: string }[];
  note?: string;
}

// Union type of all possible section types
type Section =
  | HeroSection
  | WelcomeSection
  | ServicesSection
  | TestimonialsSection
  | CTASection
  | PortfolioSection
  | AboutHeroSection
  | StorySection
  | ValuesSection
  | TeamSection
  | ServicesListSection
  | ProcessSection
  | FAQSection
  | ContactHeroSection
  | ContactInfoSection
  | ContactFormSection
  | MapSection
  | BusinessHoursSection;

// Home page configuration
// Define portfolio section type
interface PortfolioSection {
  type: "portfolio";
  title: string;
  subtitle: string;
  showLatestProjects: boolean;
  limit: number;
  cta?: {
    text: string;
    link: string;
  };
}

export const homePageConfig: PageConfig = {
  title: "Creare site-uri care aduc clienți",
  description:
    "Site-uri rapide cu SEO inclus, preț fix înainte de start. 50+ proiecte livrate, răspuns în 24h. Cere ofertă.",
  ogImage: siteConfig.ogImage,
  sections: [
    {
      type: "portfolio",
      title: "Site-uri live, nu capturi.",
      subtitle:
        "Cinci proiecte recente, toate online și folosite de clienți reali. Intră pe orice studiu de caz ca să vezi ce am făcut concret.",
      showLatestProjects: true,
      limit: 5,
      cta: {
        text: "Vezi toate proiectele",
        link: "/portofoliu",
      },
    },
    {
      type: "welcome",
      title: "Site-uri care arată bine și aduc clienți.",
      subtitle:
        "BitDoze construiește site-uri rapide, optimizate SEO, și le întreține pe termen lung. Lucrezi direct cu omul care îți face site-ul.",
      features: [
        {
          icon: "mdi:shield-check",
          title: "Preț fix înainte",
          description:
            "Știi cât plătești și când e gata, înainte să începem.",
          iconColor: "var(--color-primary)",
        },
        {
          icon: "mdi:lightbulb",
          title: "Viteză și SEO incluse",
          description:
            "Nu sunt extra-opțiuni. Orice site pleacă rapid și indexabil.",
          iconColor: "var(--color-secondary)",
        },
      ],
      ctas: {
        primary: {
          text: "Cere ofertă",
          link: "/contact",
        },
        secondary: {
          text: "Vezi servicii și prețuri",
          link: "/servicii",
        },
        welcome: [
          {
            text: "Consultare Gratuită",
            link: "/contact",
          },
          {
            text: "Vezi Prețurile",
            link: "/servicii",
          },
        ],
      },
      image: "/images/welcome-image.jpg",
      badge: "Răspuns în 24h lucrătoare",
    },
    {
      type: "services",
      title: "Servicii Complete cu Prețuri Transparente",
      subtitle:
        "Site de prezentare de la 2500 RON, magazin online de la 5000 RON. Toate cu SEO tehnic și viteză incluse.",
      showAllServices: false,
      limit: 3,
      cta: {
        text: "Vezi toate serviciile →",
        link: "/servicii",
      },
    },
    // Notă: secțiunea testimonials a fost scoasă intenționat până avem
    // testimoniale reale cu nume/firmă verificabile. Placeholder-ele
    // generice (nume inventate) scad încrederea exact unde contează.
    {
      ...getCtaSection(),
      trustedBy: "50+ proiecte livrate · suport în română · răspuns în 24h",
    },
  ],
};

// About page configuration
export const aboutPageConfig: PageConfig = {
  title: "Omul care îți face site-ul",
  description:
    "BitDoze înseamnă Dragoș — 10+ ani de IT, site-uri rapide cu preț fix înainte de start și răspuns în 24h.",
  ogType: "website",
  sections: [
    {
      type: "aboutHero",
      title: "Despre Noi",
      subtitle:
        "Află despre misiunea companiei noastre, valorile și echipa din spatele succesului nostru.",
      imageUrl: imageAssets.hero.about,
    },
    {
      type: "story",
      title: "Povestea Noastră",
      subtitle: "Cum a început totul",
      content: `<p>Sunt Dragoș. Din 2014 fac site-uri care se încarcă repede și aduc clienți: 50+ proiecte, preț fix înainte de start, întreținere după lansare. Scriu despre WordPress pe wpdoze.com — ce învăț acolo ajunge direct în site-ul tău.</p>`,
      image: "/images/portofolio/bitdoze.com.webp",
      stats: [
        { value: "10+", label: "Ani de experiență" },
        { value: "50+", label: "Proiecte livrate" },
        { value: "2", label: "Platforme educaționale" },
      ],
    },
    {
      type: "values",
      title: "Valorile Noastre",
      subtitle: "Principiile care ghidează tot ceea ce facem",
      values: [
        {
          title: "Preț fix, în scris",
          description:
            "Știi cât costă și când e gata înainte să începem — prețul din ofertă e prețul final.",
          icon: "mdi:shield-check",
        },
        {
          title: "Răspund eu, nu un tichet",
          description:
            "Vorbești direct cu omul care îți face site-ul, în maximum 24h lucrătoare.",
          icon: "mdi:account",
        },
        {
          title: "Rapid și indexabil din prima zi",
          description:
            "Orice site pleacă rapid și cu SEO tehnic inclus — nu ca extra-opțiuni.",
          icon: "mdi:rocket",
        },
      ],
    },
    {
      type: "team",
      title: "Echipa Noastră",
      subtitle: "Cunoaște experții din spatele succesului nostru",
      team: [
        {
          name: "Dragoș",
          role: "Fondator & Specialist IT",
          bio: "10+ ani de IT, 4 ani pe DevOps și servere. Îți face site-ul, îl pune pe server și îl ține online — același om de la prima discuție la mentenanță.",
          image: "/images/dragos.jpg",
          socialMedia: [
            {
              platform: "LinkedIn",
              url: "https://linkedin.com/company/bitdoze",
              icon: "mdi:linkedin",
            },
            {
              platform: "Facebook",
              url: "https://facebook.com/bitdoze",
              icon: "mdi:facebook",
            },
          ],
        },
      ],
      sideProjectsTitle: "Ce mai construiesc",
      sideProjects: [
        {
          name: "bitdoze.com",
          proof: "400+ articole tehnice verificate practic — DevOps, AI, web development, self-hosting.",
          url: "https://bitdoze.com",
        },
        {
          name: "@webdoze pe YouTube",
          proof: "10.400+ abonați, 400+ videoclipuri, 1,1M+ vizionări — tutoriale DevOps, AI și self-hosting.",
          url: "https://www.youtube.com/@webdoze",
        },
        {
          name: "Bitdoze Astro Theme",
          proof: "Temă open-source de blog cu 25+ stele — MDX, taguri, serii, căutare, RSS.",
          url: "https://github.com/bitdoze/bitdoze-astro-theme",
        },
        {
          name: "BitBuddies.me",
          proof: "Aplicație web AI full-stack — self-hosted cu CI/CD pe VPS.",
          url: "https://github.com/bitdoze/bitbuddies.me",
        },
        {
          name: "Bitdoze Bot",
          proof: "Agent AI pe Discord cu 20+ stele — Python, căutare vectorială, memorie.",
          url: "https://github.com/bitdoze/bitdoze_bot",
        },
        {
          name: "Bitdoze Mastra",
          proof: "Asistent autonom de cod și research — browser automation, Discord, workflow-uri programate.",
          url: "https://github.com/bitdoze/bitdoze-mastra",
        },
      ],
    },
    {
      ...getCtaSection(),
      trustedBy: "50+ proiecte livrate · suport în română · răspuns în 24h",
    },
  ],
};


// Contact page configuration
export const contactPageConfig: PageConfig = {
  title: "Cere ofertă — preț fix în 24h",
  description:
    "3–4 fraze despre proiect sunt suficiente. Primești preț fix și termen în 24h lucrătoare, de la omul care îți face site-ul.",
  ogType: "website",
  sections: [
    {
      type: "contactHero",
      title: "Cere ofertă",
      subtitle:
        "3–4 fraze despre proiect sunt suficiente. Primești preț fix și termen în 24h lucrătoare.",
      buttonText: "Cere ofertă",
    },
    {
      type: "contactInfo",
      title: "Direct, fără formular",
      subtitle:
        "Mail sau telefon — răspund eu în 24h lucrătoare, cu preț și termen.",
      sectionTitle: "Direct, fără formular",
      contactInfo: [
        {
          title: "Email",
          details: companyConfig.contact.email,
          icon: "mdi:email",
          link: `mailto:${companyConfig.contact.email}`,
        },
        {
          title: "Telefon",
          details: companyConfig.contact.phone,
          icon: "mdi:phone",
          link: `tel:${companyConfig.contact.phone.replace(/\s+/g, "")}`,
        },
        {
          title: "Adresă",
          details: `${companyConfig.contact.address.street}, ${companyConfig.contact.address.city}, ${companyConfig.contact.address.state} ${companyConfig.contact.address.zip}`,
          icon: "mdi:map-marker",
          link: `https://maps.google.com/?q=${encodeURIComponent(
            `${companyConfig.contact.address.street}, ${companyConfig.contact.address.city}, ${companyConfig.contact.address.state} ${companyConfig.contact.address.zip}`
          )}`,
        },
      ],
    },
    {
      type: "contactForm",
      title: "Spune-mi 3–4 fraze despre proiect",
      subtitle:
        "Răspund eu în 24h lucrătoare, cu preț și termen. Fără newsletter, datele ajung doar la mine.",
      fields: [
        {
          type: "text",
          id: "first-name",
          name: "first-name",
          label: "Prenume",
          required: true,
        },
        {
          type: "text",
          id: "last-name",
          name: "last-name",
          label: "Nume",
          required: true,
        },
        {
          type: "email",
          id: "email",
          name: "email",
          label: "Adresă Email",
          required: true,
        },
        {
          type: "tel",
          id: "phone",
          name: "phone",
          label: "Număr de Telefon",
          required: false,
        },
        {
          type: "select",
          id: "subject",
          name: "subject",
          label: "Subiect",
          required: true,
          options: [
            { label: "Întrebare Generală", value: "general" },
            { label: "Suport", value: "support" },
            { label: "Vânzări", value: "sales" },
            { label: "Parteneriat", value: "partnership" },
            { label: "Altele", value: "other" },
          ],
        },
        {
          type: "textarea",
          id: "message",
          name: "message",
          label: "Mesaj",
          required: true,
        },
        {
          type: "checkbox",
          id: "consent",
          name: "consent",
          label:
            "Sunt de acord să mă contactezi pe tema cererii mele.",
          required: true,
        },
      ],
      submitText: "Trimite cererea →",
    },
    {
      type: "map",
      title: "Locația Noastră",
      subtitle: "Atelier în Călinești, Argeș — vizită doar cu programare, stabilită pe mail.",
      address: `${companyConfig.contact.address.street}, ${companyConfig.contact.address.city}, ${companyConfig.contact.address.state} ${companyConfig.contact.address.zip}`,
    },
    {
      type: "businessHours",
      title: "Program de Lucru",
      subtitle:
        "Luni–Vineri 9–17, sâmbătă 10–14. În afara lor, mailul e cel mai rapid.",
      hours: [
        {
          days: "Luni - Vineri",
          hours: "9:00 - 17:00",
        },
        {
          days: "Sâmbătă",
          hours: "10:00 - 14:00",
        },
        {
          days: "Duminică",
          hours: "Închis",
        },
      ],
      note: "În afara programului lasă mail — îl citesc eu și răspund în 24h lucrătoare.",
    },
    {
      ...getCtaSection(),
      trustedBy: "50+ proiecte livrate · suport în română · răspuns în 24h",
    },
  ],
};

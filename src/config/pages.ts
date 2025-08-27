import { siteConfig } from "./site";
import { companyConfig } from "./company";
import { services } from "./services";
import { imageAssets } from "./assets";
import { ctaConfig, getCtaSection } from "./cta";

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
  title:
    "BitDoze - Agenție Web Profesională | Creare Site-uri & Marketing Digital România",
  description:
    "Agenție web profesională din România. Creare site-uri, magazine online, SEO și marketing digital. Consultare gratuită. ✓10+ ani experiență ✓50+ proiecte",
  ogImage: siteConfig.ogImage,
  sections: [
    {
      type: "portfolio",
      title: "Portofoliu",
      subtitle:
        "Explorați o selecție din proiectele noastre recente și descoperiți soluțiile digitale personalizate pe care le-am creat pentru clienții noștri.",
      showLatestProjects: true,
      limit: 3,
      cta: {
        text: "Vezi toate proiectele",
        link: "/portofoliu",
      },
    },
    {
      type: "hero",
      title:
        "Transformăm Ideile Tale în Succese Digitale Care Generează Profit",
      subtitle:
        "Creăm site-uri profesionale și strategii de marketing care aduc clienți noi și cresc veniturile. Răspuns garantat în 24 ore.",
      ctaPrimary: {
        text: "Obține Consultare Gratuită",
        link: "/contact",
      },
      ctaSecondary: {
        text: "Vezi Portofoliul Nostru",
        link: "/portofoliu",
      },
      imageUrl: imageAssets.hero.main,
      stats: [
        {
          value: "50+",
          label: "Proiecte Finalizate",
        },
        {
          value: "10+",
          label: "Ani Experiență",
        },
        {
          value: "24/7",
          label: "Suport Clienți",
        },
      ],
    },
    {
      type: "welcome",
      title: "Partenerul Tău de Încredere pentru Creștere Digitală",
      subtitle:
        "De peste 10 ani, ajutăm afacerile din România să crească online. 100% Satisfacție Garantată sau Banii Înapoi.",
      features: [
        {
          icon: "mdi:shield-check",
          title: "Servicii de Încredere",
          description:
            "Ne mândrim cu fiabilitatea și excelența în fiecare proiect pe care îl întreprindem.",
          iconColor: "var(--color-primary)",
        },
        {
          icon: "mdi:lightbulb",
          title: "Soluții Inovatoare",
          description:
            "Aducem gândire creativă și abordări moderne pentru a rezolva provocările afacerii tale.",
          iconColor: "var(--color-secondary)",
        },
      ],
      ctas: {
        primary: {
          text: "Începe Proiectul Tău",
          link: "/contact",
        },
        secondary: {
          text: "Vezi Servicii & Prețuri",
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
      badge: "Răspuns în 24 Ore Garantat",
    },
    {
      type: "services",
      title: "Servicii Complete cu Prețuri Transparente",
      subtitle:
        "Soluții digitale dovedite care aduc rezultate măsurabile. Prețuri de la 2500 RON. Fără costuri ascunse.",
      showAllServices: false,
      limit: 3,
      cta: {
        text: "Vezi Toate Serviciile →",
        link: "/servicii",
      },
    },
    {
      type: "testimonials",
      title: "Ce Spun Clienții Noștri",
      subtitle:
        "Numeroase companii din România au încredere în serviciile noastre pentru a-și dezvolta afacerile.",
      testimonials: [
        {
          content:
            "Serviciile oferite au transformat complet modul în care ne gestionăm prezența online. Designul site-ului a atras mult mai mulți clienți decât ne așteptam.",
          author: "Maria Ionescu",
          role: "Director Marketing",
          company: "Soluții Digitale SRL",
          avatar: "https://xsgames.co/randomusers/assets/avatars/female/32.jpg",
        },
        {
          content:
            "Am încercat mai multe agenții înainte, dar nimic nu se compară cu serviciile BitDoze. Optimizările SEO ne-au ajutat să reducem costurile de publicitate cu 35%.",
          author: "Mihai Popa",
          role: "Director General",
          company: "Inovație Plus",
          avatar: "https://xsgames.co/randomusers/assets/avatars/male/45.jpg",
        },
        {
          content:
            "Suportul pentru clienți este excepțional. Ori de câte ori avem întrebări, echipa răspunde rapid și eficient. Este rar să găsești acest nivel de servicii în România.",
          author: "Elena Dumitrescu",
          role: "Manager de Produs",
          company: "Creștere Digitală SRL",
          avatar: "https://xsgames.co/randomusers/assets/avatars/female/68.jpg",
        },
      ],
    },
    {
      ...getCtaSection(),
      trustedBy: "De încredere pentru companii de top din România",
    },
  ],
};

// About page configuration
export const aboutPageConfig: PageConfig = {
  title: "Despre Noi",
  description:
    "Află despre misiunea companiei noastre, valorile și echipa din spatele succesului nostru.",
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
      content: `<p>Salut! Permite-mi să mă prezint. Numele meu este Dragoș și sunt un profesionist IT cu peste un deceniu de experiență în domeniu. În ultimii patru ani, m-am dedicat lumii fascinante a DevOps, îmbunătățindu-mi constant abilitățile și rămânând la curent cu cele mai recente tendințe din industrie.</p>

      <p>Una dintre pasiunile mele este să scriu despre WordPress, având o platformă dedicată numită wpdoze.com unde îmi împărtășesc cunoștințele despre acest sistem de gestionare a conținutului extrem de popular. De la sfaturi practice la tutoriale detaliate, mă străduiesc să ofer resurse valoroase care să ajute persoanele și afacerile să își optimizeze site-urile WordPress.</p>

      <p>Pe lângă pasiunea pentru WordPress, sunt la fel de entuziasmat de Linux, site-uri statice, CMS, VPS și tot ce ține de DevOps. Aceste subiecte m-au determinat să lansez platforma bitdoze.com, unde explorez funcționalitățile Linux, lumea site-urilor statice și ofer consultanță în domeniul DevOps și soluții personalizate pentru afaceri în mediul digital.</p>`,
      image:
        "https://images.unsplash.com/photo-1551761429-8232f9f5955c?q=80&w=2070&auto=format&fit=crop",
      stats: [
        { value: "10+", label: "Ani de experiență" },
        { value: "100+", label: "Clienți mulțumiți" },
        { value: "2", label: "Platforme educaționale" },
      ],
    },
    {
      type: "values",
      title: "Valorile Noastre",
      subtitle: "Principiile care ghidează tot ceea ce facem",
      values: [
        {
          title: "Excelență",
          description:
            "Ne străduim să oferim excelență în fiecare proiect pe care îl abordăm, asigurând cea mai înaltă calitate a serviciilor pentru clienții noștri.",
          icon: "mdi:star",
        },
        {
          title: "Inovație",
          description:
            "Adoptăm gândirea inovatoare și abordări noi pentru a rezolva probleme complexe și a stimula creșterea afacerilor.",
          icon: "mdi:lightbulb",
        },
        {
          title: "Integritate",
          description:
            "Operăm cu onestitate, transparență și responsabilitate în toate interacțiunile noastre cu clienții și echipa.",
          icon: "mdi:shield-check",
        },
        {
          title: "Colaborare",
          description:
            "Credem în puterea colaborării, lucrând îndeaproape cu clienții și membrii echipei pentru a atinge obiective comune.",
          icon: "mdi:account-group",
        },
        {
          title: "Orientare către client",
          description:
            "Prioritizăm nevoile și obiectivele clienților noștri, adaptând soluțiile noastre pentru a oferi rezultate semnificative.",
          icon: "mdi:handshake",
        },
        {
          title: "Învățare continuă",
          description:
            "Suntem dedicați învățării și îmbunătățirii continue, rămânând în fruntea tendințelor și practicilor din industrie.",
          icon: "mdi:book-open-page-variant",
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
          bio: "Cu peste 10 ani de experiență în IT și 4 ani de specializare în DevOps, Dragoș aduce o viziune tehnică avansată și soluții inovatoare pentru toate proiectele.",
          image: "https://xsgames.co/randomusers/assets/avatars/male/1.jpg",
          socialMedia: [
            {
              platform: "LinkedIn",
              url: "https://linkedin.com/in/bitdoze",
              icon: "mdi:linkedin",
            },
            {
              platform: "Facebook",
              url: "https://facebook.com/bitdoze",
              icon: "mdi:facebook",
            },
          ],
        },
        {
          name: "Maria Popescu",
          role: "Specialist Web Design",
          bio: "Maria creează interfețe elegante și intuitive care îmbină estetica cu funcționalitatea, asigurând experiențe de utilizator memorabile.",
          image: "https://xsgames.co/randomusers/assets/avatars/female/1.jpg",
          socialMedia: [
            {
              platform: "LinkedIn",
              url: "https://linkedin.com/",
              icon: "mdi:linkedin",
            },
            {
              platform: "Instagram",
              url: "https://instagram.com/",
              icon: "mdi:instagram",
            },
          ],
        },
        {
          name: "Andrei Ionescu",
          role: "Specialist SEO & Marketing",
          bio: "Andrei dezvoltă strategii eficiente de marketing digital și SEO, ajutând afacerile să obțină vizibilitate și să atragă clienți valoroși.",
          image: "https://xsgames.co/randomusers/assets/avatars/male/2.jpg",
          socialMedia: [
            {
              platform: "LinkedIn",
              url: "https://linkedin.com/",
              icon: "mdi:linkedin",
            },
            {
              platform: "Facebook",
              url: "https://facebook.com/",
              icon: "mdi:facebook",
            },
          ],
        },
        {
          name: "Elena Dumitrescu",
          role: "Specialist Consultanță AI",
          bio: "Elena ajută companiile să implementeze soluții bazate pe inteligență artificială pentru automatizare și îmbunătățirea proceselor de afaceri.",
          image: "https://xsgames.co/randomusers/assets/avatars/female/2.jpg",
          socialMedia: [
            {
              platform: "LinkedIn",
              url: "https://linkedin.com/",
              icon: "mdi:linkedin",
            },
            {
              platform: "Facebook",
              url: "https://facebook.com/",
              icon: "mdi:facebook",
            },
          ],
        },
      ],
    },
    {
      ...getCtaSection(),
      trustedBy: "De încredere pentru companii de top din România",
    },
  ],
};

// Services page configuration
export const servicesPageConfig: PageConfig = {
  title: "Serviciile Noastre",
  description:
    "Explorează gama noastră completă de servicii profesionale concepute pentru a ajuta afacerea ta să crească și să aibă succes.",
  ogType: "website",
  sections: [
    {
      type: "aboutHero",
      title: "Serviciile Noastre",
      subtitle: "Soluții complete adaptate nevoilor afacerii tale",
      imageUrl: imageAssets.hero.services,
    },
    {
      type: "servicesList",
      title: "Ce Oferim",
      subtitle:
        "Explorează gama noastră de servicii profesionale concepute pentru a ajuta afacerea ta să crească și să aibă succes.",
      showAllServices: true,
      cta: {
        text: "Află Mai Multe",
        link: "/servicii",
      },
    },
    {
      type: "process",
      title: "Procesul Nostru",
      subtitle: "Cum oferim rezultate excepționale pentru afacerea ta",
      steps: [
        {
          number: 1,
          title: "Analiză",
          description:
            "Începem prin a înțelege afacerea, obiectivele, provocările și cerințele tale prin consultații detaliate.",
          icon: "mdi:magnify",
        },
        {
          number: 2,
          title: "Strategie",
          description:
            "Pe baza constatărilor noastre, dezvoltăm o strategie completă adaptată nevoilor și obiectivelor tale specifice.",
          icon: "mdi:lightbulb",
        },
        {
          number: 3,
          title: "Implementare",
          description:
            "Echipa noastră de experți implementează strategia, aplicând cele mai bune practici din industrie și abordări inovatoare.",
          icon: "mdi:cog",
        },
        {
          number: 4,
          title: "Optimizare",
          description:
            "Monitorizăm continuu performanța și facem ajustările necesare pentru a optimiza rezultatele și a asigura succesul.",
          icon: "mdi:chart-line",
        },
      ],
    },
    {
      type: "faq",
      title: "Întrebări Frecvente",
      subtitle:
        "Găsește răspunsuri la întrebările comune despre serviciile noastre",
      questions: [
        {
          question: "Ce industrii deserviți?",
          answer:
            "Lucrăm cu clienți din diverse industrii, inclusiv tehnologie, sănătate, finanțe, retail, educație și producție. Expertiza noastră diversă ne permite să înțelegem dinamica diferitelor industrii și să oferim soluții personalizate.",
        },
        {
          question: "Cât durează de obicei un proiect?",
          answer:
            "Termenele proiectelor variază în funcție de amploare, complexitate și cerințe specifice. În timpul consultației inițiale, vom oferi un termen realist bazat pe nevoile proiectului tău. Suntem dedicați respectării termenelor, asigurând în același timp rezultate de calitate.",
        },
        {
          question: "Oferiți suport continuu după finalizarea proiectului?",
          answer:
            "Da, oferim diverse opțiuni de suport și mentenanță pentru a asigura succesul tău continuu. Putem discuta aceste opțiuni în faza de planificare a proiectului pentru a găsi cea mai bună potrivire pentru nevoile și bugetul tău.",
        },
        {
          question: "Cum gestionați informațiile confidențiale?",
          answer:
            "Luăm în serios securitatea datelor și confidențialitatea. Respectăm protocoale stricte și cele mai bune practici din industrie pentru a-ți proteja informațiile. Toate datele clienților sunt tratate cu cea mai mare grijă și suntem dispuși să semnăm acorduri de confidențialitate înainte de a începe orice lucrare.",
        },
        {
          question: "Ce face serviciile voastre diferite de altele?",
          answer:
            "Abordarea noastră combină expertiza în industrie, gândirea inovatoare și un focus centrat pe client. Nu oferim doar soluții generice—lucrăm îndeaproape cu tine pentru a înțelege provocările tale unice și a dezvolta strategii personalizate care se aliniază cu obiectivele și viziunea ta specifică.",
        },
      ],
    },
    getCtaSection(),
  ],
};

// Contact page configuration
export const contactPageConfig: PageConfig = {
  title: "Contact",
  description:
    "Contactează echipa noastră pentru întrebări, asistență sau pentru a discuta cum putem ajuta afacerea ta.",
  ogType: "website",
  sections: [
    {
      type: "contactHero",
      title: "Contact",
      subtitle:
        "Contactează echipa noastră pentru întrebări, asistență sau pentru a discuta cum putem ajuta afacerea ta.",
      buttonText: "Contactează-ne",
    },
    {
      type: "contactInfo",
      title: "Contactează-ne",
      subtitle:
        "Ai întrebări sau ești gata să începi? Contactează-ne folosind oricare dintre metodele de mai jos și îți vom răspunde cât mai curând posibil.",
      sectionTitle: "Conectează-te cu noi",
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
      title: "Trimite-ne un mesaj",
      subtitle:
        "Completează formularul de mai jos și îți vom răspunde cât mai curând posibil.",
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
            "Sunt de acord ca acest site web să stocheze informațiile mele trimise pentru a putea răspunde la solicitarea mea.",
          required: true,
        },
      ],
      submitText: "Trimite Mesaj",
    },
    {
      type: "map",
      title: "Locația Noastră",
      subtitle: `Ne găsiți în ${companyConfig.contact.address.city}, Jud. ${companyConfig.contact.address.state}. Vă puteți programa o vizită în timpul orelor de program.`,
      address: `${companyConfig.contact.address.street}, ${companyConfig.contact.address.city}, ${companyConfig.contact.address.state} ${companyConfig.contact.address.zip}`,
    },
    {
      type: "businessHours",
      title: "Program de Lucru",
      subtitle:
        "Echipa noastră este disponibilă în următoarele ore pentru a vă asista.",
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
      note: "Ai nevoie de asistență în afara programului de lucru? Trimite-ne un email și îți vom răspunde cât mai curând posibil.",
    },
    {
      ...getCtaSection(),
      trustedBy: "Trusted by leading companies worldwide",
    },
  ],
};

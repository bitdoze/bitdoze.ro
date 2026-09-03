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
  trustedBy?: string;
}

// This is the shared CTA configuration used across all pages
export const ctaConfig: CTAConfig = {
  title: "Ai un proiect? Primești preț și termen în 24h.",
  description:
    "Trimite 3–4 fraze despre ce ai nevoie. Îți răspunde omul care îți va face efectiv site-ul — nu un departament de vânzări.",
  primaryAction: {
    text: "Cere ofertă",
    href: "/contact",
  },
  secondaryAction: {
    text: "Vezi portofoliul",
    href: "/portofoliu",
  },
};

// CTA section configuration that can be imported in pages.ts
export const getCtaSection = () => ({
  type: "cta" as const,
  title: ctaConfig.title,
  subtitle: ctaConfig.description,
  ctaPrimary: {
    text: ctaConfig.primaryAction.text,
    link: ctaConfig.primaryAction.href,
  },
  ctaSecondary: ctaConfig.secondaryAction
    ? {
        text: ctaConfig.secondaryAction.text,
        link: ctaConfig.secondaryAction.href,
      }
    : undefined,
  trustedBy: "50+ proiecte livrate · suport în română · răspuns în 24h",
});

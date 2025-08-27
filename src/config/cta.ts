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
  title: "Pregătit să îți transformi afacerea?",
  description:
    "Începe astăzi și descoperă diferența pe care serviciile noastre o pot face pentru creșterea și succesul afacerii tale.",
  primaryAction: {
    text: "Începe Acum",
    href: "/contact",
  },
  secondaryAction: {
    text: "Află Mai Multe",
    href: "/servicii",
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
  trustedBy: "De încredere pentru companii de top din România",
});

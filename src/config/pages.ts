import { siteConfig } from "./site";
import { companyConfig } from "./company";
import { imageAssets } from "./assets";
import { services } from "./services";
import { getCtaSection, ctaConfig } from "./cta";

// Page configuration interfaces
export interface PageConfig {
  title: string;
  description: string;
  ogType?: "website" | "article";
  ogImage?: string;
  sections: any[];
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
}

export interface WelcomeSection {
  type: "welcome";
  title: string;
  subtitle: string;
  features: {
    icon: string;
    title: string;
    description: string;
    iconColor: string;
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
    avatar?: string;
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
}

export interface AboutHeroSection {
  type: "aboutHero";
  title: string;
  subtitle: string;
}

export interface StorySection {
  type: "story";
  title: string;
  paragraphs: string[];
  mission: {
    icon: string;
    title: string;
    description: string;
  };
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
  members: {
    name: string;
    position: string;
    bio: string;
    image?: string;
    icon: string;
  }[];
}

export interface ServicesListSection {
  type: "servicesList";
  title: string;
  subtitle: string;
}

export interface ProcessSection {
  type: "process";
  title: string;
  subtitle: string;
  steps: {
    step: string;
    title: string;
    description: string;
    icon: string;
  }[];
}

export interface FAQSection {
  type: "faq";
  title: string;
  subtitle: string;
  items: {
    question: string;
    answer: string;
  }[];
}

export interface ContactHeroSection {
  type: "contactHero";
  title: string;
  subtitle: string;
}

export interface ContactInfoSection {
  type: "contactInfo";
  title: string;
  subtitle: string;
  contactInfo: {
    title: string;
    details: string;
    icon: string;
    link: string;
  }[];
}

export interface ContactFormSection {
  type: "contactForm";
  title: string;
  subtitle: string;
  fields: {
    type: string;
    id: string;
    name: string;
    label: string;
    placeholder?: string;
    required: boolean;
    options?: {
      label: string;
      value: string;
    }[];
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
  hours: {
    days: string;
    hours: string;
  }[];
  note: string;
}

// Home Page Configuration
export const homePageConfig: PageConfig = {
  title: siteConfig.name,
  description: siteConfig.description,
  ogImage: siteConfig.ogImage,
  sections: [
    {
      type: "hero",
      title: "Elevate Your Business with Professional Solutions",
      subtitle: "We provide comprehensive business services designed to help your company grow and succeed in today's competitive market.",
      ctaPrimary: {
        text: "Get Started",
        link: "/contact",
      },
      ctaSecondary: {
        text: "Learn More",
        link: "/services",
      },
      imageUrl: imageAssets.hero.main,
    },
    {
      type: "welcome",
      title: "Welcome to " + companyConfig.name,
      subtitle: "We provide professional solutions for your business needs. Our experienced team is dedicated to helping your company grow and succeed in today's competitive market.",
      features: [
        {
          icon: "mdi:shield-check",
          title: "Trusted Service",
          description: "We pride ourselves on reliability and excellence in every project we undertake.",
          iconColor: "var(--color-primary)",
        },
        {
          icon: "mdi:lightbulb",
          title: "Innovative Solutions",
          description: "We bring creative thinking and modern approaches to solve your business challenges.",
          iconColor: "var(--color-secondary)",
        },
      ],
      ctas: {
        primary: {
          text: "Our Services",
          link: "/services",
        },
        secondary: {
          text: "About Us",
          link: "/about",
        },
      },
      image: "/images/welcome-image.jpg",
      badge: "15+ Years Experience",
    },
    {
      type: "services",
      title: "Our Services",
      subtitle: "We offer comprehensive solutions to help your business thrive in today's competitive market.",
      showAllServices: false,
      limit: 3,
    },
    {
      type: "testimonials",
      title: "What Our Customers Say",
      subtitle: "Thousands of companies worldwide trust our platform to scale their businesses.",
      testimonials: [
        {
          content: "This platform has completely transformed how we manage our operations. The analytics dashboard alone has saved us countless hours of manual work.",
          author: "Sarah Johnson",
          role: "CTO",
          company: "TechSolutions Inc.",
          avatar: "https://randomuser.me/api/portraits/women/32.jpg"
        },
        {
          content: "We've tried several solutions before, but nothing compares to this platform. The automation features have helped us reduce operational costs by 35%.",
          author: "Michael Rodriguez",
          role: "Director of Operations",
          company: "Innovate Labs",
          avatar: "https://randomuser.me/api/portraits/men/45.jpg"
        },
        {
          content: "The customer support is exceptional. Whenever we have questions, the team responds quickly and effectively. It's rare to find this level of service.",
          author: "Emily Chen",
          role: "Product Manager",
          company: "Growth Ventures",
          avatar: "https://randomuser.me/api/portraits/women/68.jpg"
        }
      ],
    },
    getCtaSection(),
  ],
};

// About Page Configuration
export const aboutPageConfig: PageConfig = {
  title: "About Us",
  description: "Learn about our company's mission, vision, and the team behind our success.",
  ogType: "website",
  sections: [
    {
      type: "aboutHero",
      title: "About Us",
      subtitle: companyConfig.description,
    },
    {
      type: "story",
      title: "Our Story",
      paragraphs: [
        `Founded in 2010, ${companyConfig.name} started with a simple mission: to help businesses thrive in the digital age. What began as a small team of passionate experts has grown into a company trusted by clients worldwide.`,
        `Our journey has been defined by continuous innovation, strategic growth, and an unwavering commitment to our clients' success. Through economic changes and technological evolution, we've adapted and thrived by staying true to our core values.`,
        `Today, we're proud to serve diverse clients across industries, providing solutions that drive real business results.`,
      ],
      mission: {
        icon: "mdi:domain",
        title: "Our Mission",
        description: "To empower businesses with innovative solutions that drive growth, efficiency, and lasting success in an ever-changing digital landscape.",
      },
    },
    {
      type: "values",
      title: "Our Values",
      subtitle: "These core principles guide everything we do, from how we develop our products to how we interact with our clients and each other.",
      values: [
        {
          title: "Innovation",
          description: "We continuously seek new and better ways to solve problems and create value.",
          icon: "mdi:lightbulb"
        },
        {
          title: "Integrity",
          description: "We are committed to honesty, transparency, and ethical business practices.",
          icon: "mdi:shield-check"
        },
        {
          title: "Excellence",
          description: "We strive for the highest standards in everything we do.",
          icon: "mdi:star"
        },
        {
          title: "Customer Focus",
          description: "Our clients' success is our success. We're dedicated to delivering exceptional value.",
          icon: "mdi:account-group"
        },
      ],
    },
    {
      type: "team",
      title: "Meet Our Team",
      subtitle: "Our talented team brings diverse skills and perspectives to deliver exceptional results for our clients.",
      members: [
        {
          name: "Jane Doe",
          position: "CEO & Founder",
          bio: "With over 15 years of industry experience, Jane leads our company's vision and strategy.",
          image: "/images/team/jane-doe.jpg",
          icon: "mdi:account"
        },
        {
          name: "John Smith",
          position: "CTO",
          bio: "John brings technical leadership and innovation to our product development.",
          image: "/images/team/john-smith.jpg",
          icon: "mdi:account"
        },
        {
          name: "Emily Chen",
          position: "Head of Marketing",
          bio: "Emily leads our marketing efforts with creative strategies that drive growth.",
          image: "/images/team/emily-chen.jpg",
          icon: "mdi:account"
        },
        {
          name: "Michael Brown",
          position: "Customer Success",
          bio: "Michael ensures our clients receive exceptional service and achieve their goals.",
          image: "/images/team/michael-brown.jpg",
          icon: "mdi:account"
        },
      ],
    },
    getCtaSection(),
  ],
};

// Services Page Configuration
export const servicesPageConfig: PageConfig = {
  title: "Our Services",
  description: "Explore our comprehensive range of services designed to help your business succeed.",
  ogType: "website",
  sections: [
    {
      type: "aboutHero",
      title: "Our Services",
      subtitle: "Explore our comprehensive range of services designed to help your business succeed.",
    },
    {
      type: "servicesList",
      title: "What We Offer",
      subtitle: "Our comprehensive suite of services is designed to help businesses of all sizes achieve their goals and overcome challenges.",
    },
    {
      type: "process",
      title: "Our Process",
      subtitle: "We follow a structured approach to ensure consistent, high-quality results for every client project.",
      steps: [
        {
          step: "1",
          title: "Discovery",
          description: "We start by understanding your business needs, goals, and challenges through in-depth consultation.",
          icon: "mdi:magnify"
        },
        {
          step: "2",
          title: "Strategy",
          description: "We develop a customized strategy and plan of action tailored to your specific requirements.",
          icon: "mdi:strategy"
        },
        {
          step: "3",
          title: "Implementation",
          description: "Our expert team executes the strategy with precision, keeping you informed throughout the process.",
          icon: "mdi:rocket-launch"
        },
        {
          step: "4",
          title: "Optimization",
          description: "We continuously monitor, analyze, and refine our approach to ensure optimal results.",
          icon: "mdi:chart-line"
        }
      ],
    },
    {
      type: "faq",
      title: "Frequently Asked Questions",
      subtitle: "Get answers to common questions about our services and how we work with clients.",
      items: [
        {
          question: "How do you tailor your services to meet my specific business needs?",
          answer: "We begin with a thorough discovery process to understand your unique business challenges and goals. Based on this assessment, we create a customized service package designed specifically for your situation, ensuring that our solutions align perfectly with your objectives."
        },
        {
          question: "What is your typical timeframe for delivering results?",
          answer: "While each project is unique, we typically begin showing initial results within 30-60 days. More substantial outcomes develop over 3-6 months as our strategies gain momentum. We provide regular progress reports and maintain transparent communication throughout the process."
        },
        {
          question: "Do you offer ongoing support after the initial project is complete?",
          answer: "Absolutely! We offer various support packages to ensure the continued success of your project. These include regular maintenance, performance monitoring, strategic adjustments, and access to our support team for any questions or assistance you might need."
        },
        {
          question: "How do you measure the success of your services?",
          answer: "We establish clear, measurable KPIs at the beginning of each project, tailored to your specific goals. Throughout our engagement, we provide detailed analytics and reporting that track these metrics, allowing both teams to objectively assess performance and ROI."
        }
      ],
    },
    getCtaSection(),
  ],
};

// Contact Page Configuration
export const contactPageConfig: PageConfig = {
  title: "Contact Us",
  description: "Get in touch with our team for inquiries, support, or to discuss how we can help your business.",
  ogType: "website",
  sections: [
    {
      type: "contactHero",
      title: "Contact Us",
      subtitle: "Get in touch with our team for inquiries, support, or to discuss how we can help your business.",
    },
    {
      type: "contactInfo",
      title: "Get in Touch",
      subtitle: "Have questions or ready to get started? Reach out to us using any of the methods below, and we'll get back to you as soon as possible.",
      contactInfo: [
        {
          title: "Email Us",
          details: companyConfig.contact.email,
          icon: "mdi:email",
          link: `mailto:${companyConfig.contact.email}`
        },
        {
          title: "Call Us",
          details: companyConfig.contact.phone,
          icon: "mdi:phone",
          link: `tel:${companyConfig.contact.phone.replace(/\s+/g, '')}`
        },
        {
          title: "Visit Us",
          details: `${companyConfig.contact.address.street}, ${companyConfig.contact.address.city}, ${companyConfig.contact.address.state} ${companyConfig.contact.address.zip}`,
          icon: "mdi:map-marker",
          link: `https://maps.google.com/?q=${encodeURIComponent(
            `${companyConfig.contact.address.street}, ${companyConfig.contact.address.city}, ${companyConfig.contact.address.state} ${companyConfig.contact.address.zip}`
          )}`
        }
      ],
    },
    {
      type: "contactForm",
      title: "Send Us a Message",
      subtitle: "Fill out the form below and we'll get back to you as soon as possible.",
      fields: [
        {
          type: "text",
          id: "first-name",
          name: "first-name",
          label: "First Name",
          required: true,
        },
        {
          type: "text",
          id: "last-name",
          name: "last-name",
          label: "Last Name",
          required: true,
        },
        {
          type: "email",
          id: "email",
          name: "email",
          label: "Email Address",
          required: true,
        },
        {
          type: "tel",
          id: "phone",
          name: "phone",
          label: "Phone Number",
          required: false,
        },
        {
          type: "select",
          id: "subject",
          name: "subject",
          label: "Subject",
          required: true,
          options: [
            { label: "General Inquiry", value: "general" },
            { label: "Support", value: "support" },
            { label: "Sales", value: "sales" },
            { label: "Partnership", value: "partnership" },
            { label: "Other", value: "other" },
          ],
        },
        {
          type: "textarea",
          id: "message",
          name: "message",
          label: "Message",
          required: true,
        },
        {
          type: "checkbox",
          id: "consent",
          name: "consent",
          label: "I consent to having this website store my submitted information so they can respond to my inquiry.",
          required: true,
        },
      ],
      submitText: "Send Message",
    },
    {
      type: "map",
      title: "Our Location",
      subtitle: `We're conveniently located in the heart of ${companyConfig.contact.address.city}. Feel free to visit us during business hours.`,
      address: `${companyConfig.contact.address.street}, ${companyConfig.contact.address.city}, ${companyConfig.contact.address.state} ${companyConfig.contact.address.zip}`,
    },
    {
      type: "businessHours",
      title: "Business Hours",
      subtitle: "Our team is available during the following hours to assist you.",
      hours: [
        {
          days: "Monday - Friday",
          hours: "9:00 AM - 5:00 PM",
        },
        {
          days: "Saturday",
          hours: "10:00 AM - 2:00 PM",
        },
        {
          days: "Sunday",
          hours: "Closed",
        },
      ],
      note: "Need assistance outside of business hours? Send us an email, and we'll get back to you as soon as possible.",
    },
    getCtaSection(),
  ],
};
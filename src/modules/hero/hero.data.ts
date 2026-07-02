/* ==========================================================
   SEYONIX
   HERO MODULE DATA
   ----------------------------------------------------------
   Production Ready
   Version : 1.0.0
========================================================== */

import portrait from "../../assets/yuvaraj.png";

import type {
  HeroData,
} from "./hero.types";

/* ==========================================================
   HERO DATA
========================================================== */

export const heroData: HeroData = {
  /* ======================================================
     CONTENT
  ====================================================== */

  content: {
    badge: "Founder • Creative Director • AI Growth Strategist",

    firstName: "Yuvaraj",

    lastName: "Ramalingam",

    subtitle:
      "Designing premium digital brands, AI creative systems, and growth experiences for modern founders.",

    description:
      "I build luxury digital experiences that blend strategy, creativity, technology, and AI to turn ambitious brands into unforgettable businesses.",
  },

  /* ======================================================
     IMAGE
  ====================================================== */

  image: {
    src: portrait,

    alt: "Yuvaraj Ramalingam",
  },

  /* ======================================================
     BUTTONS
  ====================================================== */

  buttons: [
    {
      id: "portfolio",

      text: "View Portfolio",

      href: "#selected-works",

      variant: "outline",

      target: "_self",
    },

    {
      id: "contact",

      text: "Book Strategy Call",

      href: "#contact",

      variant: "gold",

      target: "_self",
    },
  ],

  /* ======================================================
     SOCIAL
  ====================================================== */

  socials: [
    {
      id: "linkedin",

      platform: "LinkedIn",

      label: "LinkedIn",

      url: "https://www.linkedin.com/company/113034249",

      target: "_blank",
    },

    {
      id: "instagram",

      platform: "Instagram",

      label: "Instagram",

      url: "https://www.instagram.com/seyon_ix/",

      target: "_blank",
    },

    {
      id: "facebook",

      platform: "Facebook",

      label: "Facebook",

      url: "https://www.facebook.com/profile.php?id=61581664664324",

      target: "_blank",
    },
  ],

  /* ======================================================
     METRICS
  ====================================================== */

  metrics: [
    {
      id: "projects",

      value: "150+",

      label: "Projects",

      description:
        "Successfully delivered premium digital solutions.",
    },

    {
      id: "clients",

      value: "50+",

      label: "Clients",

      description:
        "Businesses served across multiple industries.",
    },

    {
      id: "experience",

      value: "5+",

      label: "Years",

      description:
        "Experience in technology and digital growth.",
    },
  ],

  /* ======================================================
     GLASS CARD
  ====================================================== */

  glassCard: {
    title: "SEYONIX",

    subtitle: "Luxury Brand Studio",

    services: [
      {
        id: "service-1",

        title: "Brand Strategy",
      },

      {
        id: "service-2",

        title: "AI Creative Direction",
      },

      {
        id: "service-3",

        title: "Premium Websites",
      },

      {
        id: "service-4",

        title: "Growth Systems",
      },

      {
        id: "service-5",

        title: "Automation Design",
      },
    ],
  },

  /* ======================================================
     FLOATING CARDS
  ====================================================== */

  floatingCards: [
    {
      id: "projects-card",

      title: "Projects Delivered",

      value: "150+",

      description:
        "Premium websites, AI automation, branding and marketing solutions.",
    },

    {
      id: "clients-card",

      title: "Client Satisfaction",

      value: "98%",

      description:
        "Focused on measurable business growth and long-term partnerships.",
    },
  ],
};

export default heroData;
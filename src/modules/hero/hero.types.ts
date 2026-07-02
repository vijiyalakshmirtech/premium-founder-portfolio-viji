/* ==========================================================
   SEYONIX
   HERO MODULE TYPES
   ----------------------------------------------------------
   Production Ready
   Version : 1.0.0
========================================================== */

/* ==========================================================
   BUTTON
========================================================== */

export interface HeroButton {
  id: string;
  text: string;
  href?: string;
 variant: "gold" | "outline";
  target?: "_self" | "_blank";
  icon?: string;
}

/* ==========================================================
   SOCIAL
========================================================== */

export interface HeroSocial {
  id: string;
  platform:
    | "LinkedIn"
    | "Instagram"
    | "Facebook"
    | "GitHub"
    | "YouTube"
    | "X"
    | "Email";

  label: string;

  url: string;

  icon?: string;

  target?: "_self" | "_blank";
}

/* ==========================================================
   METRIC
========================================================== */

export interface HeroMetric {
  id: string;

  value: string;

  label: string;

  description?: string;

  suffix?: string;
}

/* ==========================================================
   SERVICE
========================================================== */

export interface HeroService {
  id: string;

  title: string;

  description?: string;

  icon?: string;
}

/* ==========================================================
   GLASS CARD
========================================================== */

export interface HeroGlassCard {
  title: string;

  subtitle: string;

  services: HeroService[];
}

/* ==========================================================
   FLOATING CARD
========================================================== */

export interface HeroFloatingCard {
  id: string;

  title: string;

  value: string;

  description: string;
}

/* ==========================================================
   IMAGE
========================================================== */

export interface HeroImage {
  src: string;

  alt: string;
}

/* ==========================================================
   CONTENT
========================================================== */

export interface HeroContent {
  badge: string;

  firstName: string;

  lastName: string;

  subtitle: string;

  description: string;
}

/* ==========================================================
   HERO DATA
========================================================== */

export interface HeroData {
  content: HeroContent;

  image: HeroImage;

  buttons: HeroButton[];

  socials: HeroSocial[];

  metrics: HeroMetric[];

  glassCard: HeroGlassCard;

  floatingCards: HeroFloatingCard[];
}

/* ==========================================================
   COMPONENT PROPS
========================================================== */

export interface HeroBadgeProps {
  badge: string;
}

export interface HeroHeadingProps {
  firstName: string;
  lastName: string;
  subtitle: string;
}

export interface HeroDescriptionProps {
  description: string;
}

export interface HeroActionsProps {
  buttons: HeroButton[];
}

export interface HeroSocialProps {
  socials: HeroSocial[];
}

export interface HeroMetricsProps {
  metrics: HeroMetric[];
}

export interface HeroImageProps {
  image: HeroImage;
}

export interface HeroGlassCardProps {
  card: HeroGlassCard;
}

export interface HeroFloatingCardsProps {
  cards: HeroFloatingCard[];
}

/* ==========================================================
   MAIN HERO
========================================================== */

export interface HeroProps {
  data: HeroData;
}
/* ==========================================================
   SEYONIX
   HERO MODULE
   ----------------------------------------------------------
   Production Ready
   Version : 1.0.0
========================================================== */

import "./styles/hero.css";

import heroData from "./hero.data";

import HeroBadge from "./components/HeroBadge";
import HeroHeading from "./components/HeroHeading";
import HeroDescription from "./components/HeroDescription";
import HeroActions from "./components/HeroActions";
import HeroSocial from "./components/HeroSocial";
import HeroMetrics from "./components/HeroMetrics";
import HeroImage from "./components/HeroImage";
import HeroGlassCard from "./components/HeroGlassCard";
import HeroFloatingCards from "./components/HeroFloatingCards";

const Hero = () => {
  return (
    <section
      id="home"
      className="hero"
      aria-labelledby="hero-title"
    >
      {/* Background */}

      <div className="hero-background">

        <div className="hero-grid" />

        <div className="hero-glow hero-glow-1" />

        <div className="hero-glow hero-glow-2" />

      </div>

      {/* Container */}

      <div className="hero-left">

  <HeroBadge
    badge={heroData.content.badge}
  />

  <HeroHeading
    firstName={heroData.content.firstName}
    lastName={heroData.content.lastName}
    subtitle={heroData.content.subtitle}
  />

  <HeroDescription
    description={heroData.content.description}
  />

  <HeroActions
    buttons={heroData.buttons}
  />

  <HeroSocial
    socials={heroData.socials}
  />
<HeroMetrics
    metrics={heroData.metrics}
  />

</div>

        {/* RIGHT */}

        <div className="hero-right">

  <HeroImage
    image={heroData.image}
  />

  <HeroGlassCard
    card={heroData.glassCard}
  />

  <HeroFloatingCards
    cards={heroData.floatingCards}
  />

</div>

    </section>
  );
};

export default Hero;
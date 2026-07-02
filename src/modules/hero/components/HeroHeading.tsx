/* ==========================================================
   SEYONIX
   HERO HEADING
   ----------------------------------------------------------
   Production Ready
   Version : 1.0.0
========================================================== */

import type { HeroHeadingProps } from "../hero.types";

const HeroHeading = ({
  firstName,
  lastName,
  subtitle,
}: HeroHeadingProps) => {
  return (
    <header className="hero-heading">

      <span className="hero-studio-signature">
        Founder Studio
      </span>

      {/* Main Title */}

      <h1 className="hero-title">

        <span className="hero-title-line hero-title-line--top">
          <span className="hero-first-name">
            {firstName}
          </span>
        </span>

        <span className="hero-title-line hero-title-line--bottom">
          <span className="hero-last-name">
            {lastName}
          </span>
        </span>

      </h1>

      {/* Subtitle */}

      <p className="hero-subtitle">

        {subtitle}

      </p>

    </header>
  );
};

export default HeroHeading;
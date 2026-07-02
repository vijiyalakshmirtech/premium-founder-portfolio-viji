/* ==========================================================
   SEYONIX
   HERO DESCRIPTION
   ----------------------------------------------------------
   Production Ready
   Version : 1.0.0
========================================================== */

import type {
  HeroDescriptionProps,
} from "../hero.types";

const HeroDescription = ({
  description,
}: HeroDescriptionProps) => {
  return (
    <div className="hero-description-wrapper">

      <p
        className="hero-description"
      >
        {description}
      </p>

    </div>
  );
};

export default HeroDescription;
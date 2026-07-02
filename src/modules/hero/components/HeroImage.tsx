/* ==========================================================
   SEYONIX
   HERO IMAGE
   ----------------------------------------------------------
   Production Ready
   Version : 1.0.0
========================================================== */

import type {
  HeroImageProps,
} from "../hero.types";

const HeroImage = ({
  image,
}: HeroImageProps) => {
  return (
    <div
      className="hero-image-section"
      aria-label="Founder Portrait"
    >
      {/* Glow Layer */}

      <div className="hero-image-glow" />

      {/* Rotating Ring */}

      <div className="hero-image-ring" />

      {/* Portrait */}

      <figure className="hero-image-wrapper">

        <img
          src={image.src}
          alt={image.alt}
          className="hero-image"
          loading="eager"
          decoding="async"
          draggable={false}
        />

      </figure>

    </div>
  );
};

export default HeroImage;
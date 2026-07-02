/* ==========================================================
   SEYONIX
   HERO BADGE
   ----------------------------------------------------------
   Production Ready
   Version : 1.0.0
========================================================== */

import type { HeroBadgeProps } from "../hero.types";

const HeroBadge = ({
  badge,
}: HeroBadgeProps) => {
  return (
    <div
      className="hero-badge"
      role="note"
      aria-label={badge}
    >
      {/* Animated Status Dot */}

      <span
        className="hero-badge-dot"
        aria-hidden="true"
      />

      {/* Badge Text */}

      <span className="hero-badge-text">
        {badge}
      </span>
    </div>
  );
};

export default HeroBadge;
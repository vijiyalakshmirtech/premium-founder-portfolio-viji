/* ==========================================================
   SEYONIX
   HERO GLASS CARD
   ----------------------------------------------------------
   Production Ready
   Version : 1.0.0
========================================================== */

import type {
  HeroGlassCardProps,
  HeroService,
} from "../hero.types";

const HeroGlassCard = ({
  card,
}: HeroGlassCardProps) => {
  return (
    <aside
      className="hero-glass-card"
      aria-label={card.title}
    >
      {/* ===============================================
          Header
      =============================================== */}

      <div className="hero-glass-card-header">

        <div className="hero-glass-card-logo">

          <span
            className="hero-glass-card-logo-dot"
            aria-hidden="true"
          />

        </div>

        <div className="hero-glass-card-title">

          <h3>{card.title}</h3>

          <p>{card.subtitle}</p>

        </div>

      </div>

      {/* Divider */}

      <div
        className="hero-glass-card-divider"
        aria-hidden="true"
      />

      {/* ===============================================
          Services
      =============================================== */}

      <ul className="hero-glass-card-services">

        {card.services.map(
          (service: HeroService) => (

            <li
              key={service.id}
              className="hero-glass-card-service"
            >

              <span
                className="hero-service-check"
                aria-hidden="true"
              >
                ✓
              </span>

              <span className="hero-service-title">
                {service.title}
              </span>

            </li>

          )
        )}

      </ul>

    </aside>
  );
};

export default HeroGlassCard;
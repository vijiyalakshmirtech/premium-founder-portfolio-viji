/* ==========================================================
   SEYONIX
   HERO FLOATING CARDS
   ----------------------------------------------------------
   Production Ready
   Version : 1.0.0
========================================================== */

import type {
  HeroFloatingCard,
  HeroFloatingCardsProps,
} from "../hero.types";

const HeroFloatingCards = ({
  cards,
}: HeroFloatingCardsProps) => {
  return (
    <>
      {cards.map(
        (
          card: HeroFloatingCard,
          index: number
        ) => (
          <article
            key={card.id}
            className={`hero-floating-card ${
              index === 0
                ? "hero-floating-card-top"
                : "hero-floating-card-bottom"
            }`}
          >
            <span className="hero-floating-label">
              {card.title}
            </span>

            <h3 className="hero-floating-value">
              {card.value}
            </h3>

            <p className="hero-floating-description">
              {card.description}
            </p>
          </article>
        )
      )}
    </>
  );
};

export default HeroFloatingCards;
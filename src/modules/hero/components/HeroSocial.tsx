/* ==========================================================
   SEYONIX
   HERO SOCIAL
   ----------------------------------------------------------
   Production Ready
   Version : 1.0.0
========================================================== */

import type {
  HeroSocialProps,
  HeroSocial as HeroSocialType,
} from "../hero.types";

const HeroSocial = ({
  socials,
}: HeroSocialProps) => {
  return (
    <nav
      className="hero-social"
      aria-label="Social Links"
    >
      {socials.map(
        (social: HeroSocialType) => (
          <a
            key={social.id}
            href={social.url}
            target={
              social.target ?? "_blank"
            }
            rel="noopener noreferrer"
            className="hero-social-link"
            aria-label={social.label}
          >
            <span className="hero-social-text">
              {social.label}
            </span>
          </a>
        )
      )}
    </nav>
  );
};

export default HeroSocial;
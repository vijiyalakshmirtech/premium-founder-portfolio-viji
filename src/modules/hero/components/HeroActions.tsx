/* ==========================================================
   SEYONIX
   HERO ACTIONS
   ----------------------------------------------------------
   Production Ready
   Version : 1.0.0
========================================================== */

import Button from "../../../components/Button";

import type {
  HeroActionsProps,
  HeroButton,
} from "../hero.types";

const HeroActions = ({
  buttons,
}: HeroActionsProps) => {
  return (
    <div
      className="hero-actions"
      role="group"
      aria-label="Hero Actions"
    >
      {buttons.map((button: HeroButton) => (
        <Button
          key={button.id}
          text={button.text}
          variant={button.variant}
        />
      ))}
    </div>
  );
};

export default HeroActions;
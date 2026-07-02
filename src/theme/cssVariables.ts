/* ==========================================================
   SEYONIX THEME
   CSS VARIABLES
========================================================== */

import theme from "./theme";

export function applyTheme() {
  const root = document.documentElement;

  /* ======================================================
     COLORS
  ====================================================== */

  root.style.setProperty(
    "--color-primary",
    theme.colors.brand.primary
  );

  root.style.setProperty(
    "--color-secondary",
    theme.colors.brand.secondary
  );

  root.style.setProperty(
    "--color-background",
    theme.colors.brand.background
  );

  root.style.setProperty(
    "--text-primary",
    theme.colors.text.primary
  );

  root.style.setProperty(
    "--text-secondary",
    theme.colors.text.secondary
  );

  /* ======================================================
     SPACING
  ====================================================== */

  root.style.setProperty(
    "--section-spacing",
    theme.spacing.section.desktop
  );

  root.style.setProperty(
    "--container-width",
    theme.spacing.container.maxWidth
  );

  /* ======================================================
     RADIUS
  ====================================================== */

  root.style.setProperty(
    "--radius-card",
    theme.radius.card.large
  );

  root.style.setProperty(
    "--radius-button",
    theme.radius.button.pill
  );

  /* ======================================================
     SHADOW
  ====================================================== */

  root.style.setProperty(
    "--shadow-card",
    theme.shadows.card.default
  );

  root.style.setProperty(
    "--shadow-button",
    theme.shadows.button.default
  );

  /* ======================================================
     GRADIENT
  ====================================================== */

  root.style.setProperty(
    "--gradient-primary",
    theme.gradients.primary
  );

  root.style.setProperty(
    "--gradient-hero",
    theme.gradients.hero
  );
}
/* ==========================================================
   SEYONIX DESIGN SYSTEM
   COMPONENT TOKENS
========================================================== */

import colors from "./colors";
import spacing from "./spacing";
import radius from "./radius";
import shadows from "./shadows";
import typography from "./typography";

export const components = {
  /* ========================================================
     BUTTON
  ======================================================== */

  button: {
    primary: {
      background: colors.primary[700],
      color: colors.text.inverse,
      padding: spacing.button.large,
      radius: radius.button.pill,
      shadow: shadows.button.default,
      fontSize: typography.button.medium,
      fontWeight: typography.weight.semibold,
    },

    secondary: {
      background: colors.background.secondary,
      color: colors.primary[700],
      padding: spacing.button.large,
      radius: radius.button.pill,
      shadow: shadows.sm,
      fontSize: typography.button.medium,
      fontWeight: typography.weight.medium,
    },
  },

  /* ========================================================
     CARD
  ======================================================== */

  card: {
    background: colors.surface.card,
    radius: radius.card.large,
    shadow: shadows.card.default,
    padding: spacing.card.paddingLarge,
  },

  /* ========================================================
     GLASS CARD
  ======================================================== */

  glassCard: {
    background: colors.glass.light,
    radius: radius.card.glass,
    shadow: shadows.card.glass,
    border: colors.glass.border,
    blur: colors.glass.blur,
    padding: spacing.card.paddingLarge,
  },

  /* ========================================================
     INPUT
  ======================================================== */

  input: {
    background: colors.background.secondary,
    border: colors.border.default,
    radius: radius.input.default,
    padding: spacing.input.padding,
    fontSize: typography.body.normal.fontSize,
  },

  /* ========================================================
     BADGE
  ======================================================== */

  badge: {
    background: colors.secondary[100],
    color: colors.primary[700],
    radius: radius.badge.default,
    padding: "8px 16px",
  },

  /* ========================================================
     NAVBAR
  ======================================================== */

  navbar: {
    height: "88px",
    background: colors.glass.medium,
    shadow: shadows.navbar.blur,
  },

  /* ========================================================
     FOOTER
  ======================================================== */

  footer: {
    background: colors.primary[900],
    color: colors.text.inverse,
    padding: spacing.section.desktop,
  },
};

export default components;
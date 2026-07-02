/* ==========================================================
   SEYONIX DESIGN SYSTEM
   BREAKPOINTS
========================================================== */

export const breakpoints = {
  /* ========================================================
     DEVICE WIDTHS
  ======================================================== */

  mobileSmall: 360,

  mobile: 480,

  mobileLarge: 640,

  tablet: 768,

  laptop: 1024,

  desktop: 1280,

  wide: 1440,

  ultraWide: 1920,

  /* ========================================================
     CONTAINER WIDTH
  ======================================================== */

  container: {
    sm: "540px",

    md: "720px",

    lg: "960px",

    xl: "1140px",

    xxl: "1320px",

    full: "1400px",
  },

  /* ========================================================
     MEDIA QUERIES
  ======================================================== */

  media: {
    mobile: "(max-width:480px)",

    mobileLarge: "(max-width:640px)",

    tablet: "(max-width:768px)",

    laptop: "(max-width:1024px)",

    desktop: "(max-width:1280px)",

    wide: "(min-width:1440px)",
  },
};

export default breakpoints;
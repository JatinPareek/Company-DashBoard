/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        lavender: "#e9efff",
        gray: {
          "100": "#888",
          "200": "#1e1e1e",
          "300": "#171721",
          "400": "rgba(30, 30, 30, 0.4)",
          "500": "rgba(136, 136, 136, 0.1)",
          "600": "rgba(30, 30, 30, 0.6)",
          "700": "rgba(136, 136, 136, 0.24)",
        },
        lavenderblush: "#fff0f4",
        crimson: "#df1650",
        aliceblue: "#f0faff",
        deepskyblue: "#33bfff",
        ghostwhite: {
          "100": "#fff8fe",
          "200": "#f8faff",
          "300": "#faf8ff",
        },
        cornflowerblue: "#26a4ff",
        gainsboro: "#d9d9d9",
        mediumslateblue: "#6d62e4",
        mediumvioletred: "#e935c2",
        snow: "#fff8fd",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
      },
    },
    fontSize: {
      "3xs": "10px",
      xs: "12px",
      base: "16px",
      xl: "20px",
      lg: "18px",
      sm: "14px",
      mini: "15px",
      "7xl-5": "26.5px",
      "2xl": "21px",
      "2xs": "11px",
      "5xl": "24px",
      lgi: "19px",
      inherit: "inherit",
    },
    screens: {
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};

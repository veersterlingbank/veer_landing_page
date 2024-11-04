/** @type {import('tailwindcss').Config} */
// const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  screens: {
    sm: "600px",
    md: "768px",
    lg: "1100px",
    xl: "1280px",
    "2xl": "1536px",
  },
  theme: {
    extend: {},
    colors: {
      brand_primary: "#E21C37",
      light_brand_primary: "#FF7275",
      brand_secondary: "#144756",
      black: "#000000",
      white: "#ffffff",
      green: "#08CF5A",
      error: "#DF3939",
      error_tint: "#FAE0E0",
      success: "#23CE6B",
      success_fade: "#F2FDF6",
      success_900: "#106032",
      warning: "#F59E0B",
    },
    fontSize: {
      6: "0.375rem",
      10: "0.625rem",
      12: "0.75rem",
      14: "0.875rem",
      16: "1rem",
      18: "1.125rem",
      20: "1.25rem",
      22: "1.375rem",
      24: "1.5rem",
      25: "1.563rem",
      28: "1.75rem",
      32: "2rem",
      40: "2.5rem",
      60: "3.75rem",
    },
    fontFamily: {
      qanelas_l: ["qanelas_l", "sans-serif"],
      qanelas_r: ["qanelas_r", "sans-serif"],
      qanelas_m: ["qanelas_m", "sans-serif"],
      qanelas_sb: ["qanelas_sb", "sans-serif"],
      qanelas_b: ["qanelas_b", "sans-serif"],
      qanelas_eb: ["qanelas_eb", "sans-serif"],
    },
  },
  plugins: [],
};


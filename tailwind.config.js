const plugin = require("tailwindcss/plugin");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        lato: ["lato", "sans-serif"],
      },
      colors: {
        secondary: "#2b2b2b",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: {
          fontSize: theme("fontSize.2xl"),
          color: theme("color.gray"),
          fontWeight: theme("fontWeight.medium"),
        },
        h2: {
          fontSize: theme("fontSize.xl"),
          color: theme("color.gray"),
          fontWeight: theme("fontWeight.bold"),
        },
        h3: {
          fontSize: theme("fontSize.lg"),
          color: theme("color.gray"),
          fontWeight: theme("fontWeight.medium"),
        },
      });
    }),
  ],
};

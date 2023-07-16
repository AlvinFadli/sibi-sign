/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/*"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "16px",
      },
      extend: {
        colors: {
          primary: "#22c55e",
          secondary: "#64748b",
          dark: "#0f172a",
        },
        screens: {
          "2xl": "1320px",
        },
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
};

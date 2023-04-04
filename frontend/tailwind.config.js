/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        noir: "#000000",
        blanc: "#FFFFFF",
        gris: "#DEDEDE",
        bleu: "#006C73",
        or: "#FFD700",
      },
      fontFamily: {
        jost: ["Parisienne", "Lato", "Open-Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

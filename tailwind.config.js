/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-1": "url('./img/hero.jpg')",
        "logo-1": "url('./img/logo.svg')",
      },
      colors: {
        gray: "#40424C",
        "main-red": "#DD2242",
        blue: "#010A20",
        white: "#FFFFFF",
        "text-lighten": "#E0E0E0",
        "grey-reduced": "#85A3B2",
        "light-text": "#151439",
        "paragraph-dark": "#6F7787",
      },
      fontSize: {
        h1: ["120px", "130px"],
        h2: ["60px", "1.5"],
        h3: ["42px", "50px"],
        h4: ["26px", "41px"],
        paragraph: ["18px", "28px"],
        cta: ["18px", "1.5"],
        "paragraph-light": ["18px", "28px"],
      },
      width: {
        "hero-container": "1366px",
        "header-container": "1751px",
      },
    },
  },
  plugins: [],
};

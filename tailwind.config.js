/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-1": "url('./img/hero.jpg')",
        "logo-1": "url('./img/logo.svg')",
        "palm-1": "url('./img/4.jpg')",
        "mountain-1": "url('./img/8.jpg')",
        "waves-1": "url('./img/9.jpeg')",
        "palm-2": "url('./img/10-2.jpg')",
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
        "bg-color": "#020C21",
        "bg-button": "#E93A7D",
        "bg-blue": "#DCE8F2",
      },
      fontSize: {
        h1: ["120px", "130px"],
        h2: ["60px", "1.5"],
        h3: ["42px", "50px"],
        h4: ["26px", "41px"],
        paragraph: ["18px", "28px"],
        cta: ["18px", "1.5"],
      },
      width: {
        "hero-container": "1366px",
        "header-container": "1751px",
        "palm-container": "1280px",
        "mountain-container": "1277px",
        "waves-container": "614px",
        "palm-container-2": "1275px",
        "photo-container": "1170px",
        "blue-container": "1162px",
      },
    },
  },
  plugins: [],
};

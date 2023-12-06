/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Noto Sans", "sans-serif"],
        newsreader: ["Newsreader", "serif"],
      },
    },
    colors: {
      primary: "#FF995C", // Replace with your primary color hex code
      secondary: "#FDF2EC",
      darkest: "#171717", // Replace with your secondary color hex code
      dark: "#414141", // Replace with your dark color hex code
      medium: "#808080", // Replace with your medium color hex code
      light: "#E0E0E0", // Replace with your light color hex code
      lightest: "#F5F5F5", // Example given in your question
      white: "#ffffff", // Standard white color
      green: "#9DBA65",
      red: "#FE6545",
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

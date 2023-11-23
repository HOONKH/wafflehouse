/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "brick-pattern":
          "url('https://www.wafflehouse.com/wp-content/themes/wahotheme/assets/brick-wall-tile.jpg')",
        "diamond-pattern":
          "url('https://www.wafflehouse.com/wp-content/themes/wahotheme/assets/diamond-border.svg')",
      },
    },
  },
  plugins: [],
};

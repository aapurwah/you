/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        neon: "0 0 25px rgba(255,0,200,1)",
      },
      fontFamily: {
        gta: ['"Pricedown"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
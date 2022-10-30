/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-color": "#18181b",
        "spot-color": "#edeeff",
      },
      fontFamily: {
        "main-font": ["Roboto", "sans-serif"],
        "title-font": ["Rubik Dirt", "cursive"],
      },
      backgroundImage: {
        "cart-logo": "url('/assets/cart-logo.png')",
      },
    },
  },
  plugins: [],
};

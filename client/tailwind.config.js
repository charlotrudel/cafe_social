/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "coffeeMain":"#bf914b",
        "coffeeSecond":"#c19a6b",
        "darkBlack": "#0e1111",
        "darkGreen": "#232b2b",
        "darkGray": "#353839",
        "darkBlue": "#3b444b",
        "darkLight": "#414a4c"
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "coffeeMain":"#bf914b",
        "coffeeSecond":"#c19a6b"
      }
    },
  },
  plugins: [],
}


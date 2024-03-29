/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        themecolor: '#44597E',
        secondarythemecolor: '#1C7293',
        footercolor: '#C7D8DC',
      },
    },
    fontFamily: {
      'Inter': ['Inter', 'sans-serif'],
      'lexend': ['"Lexend Deca"', 'sans-serif'],
      'manrope': ['Manrope', 'sans-serif'],
      'maven-pro': ['Maven Pro', 'sans-serif'],
      'overpass': ['Overpass', 'sans-serif'],
      'overlock': ['Overlock', 'sans-serif']

    },
  },
  plugins: [],
}
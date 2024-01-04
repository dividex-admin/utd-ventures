/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        themecolor: '#025464',
        secondarythemecolor: '#3E9B8A',
        footercolor: '#C7D8DC',
      },
    },
    fontFamily: {
      'Inter': ['Inter', 'sans-serif'],
      'lexend': ['"Lexend Deca"', 'sans-serif'],
      'manrope': ['Manrope', 'sans-serif'],
    },
  },
  plugins: [],
}
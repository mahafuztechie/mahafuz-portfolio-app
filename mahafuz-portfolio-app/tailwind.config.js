const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'marvel':['Marvel', 'Poppins', 'sans-serif'],
      'poppins':['Poppins', 'sans-serif'],
     },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      use: {
       blue: '#000266',
       yellow: '#d0ff00',
      },
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      amber: colors.amber,
      orange: colors.orange,
      amber: colors.amber,
      yellow:colors.yellow, 
    },
    extend: {
      backgroundImage: theme => ({
     
      }),
  },},
  variants: {
    extend: {},
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./dist/**/*.{html,js,ts,jsx,tsx}",],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#0f172a',
        //primary: '#ccfbf1'
      },    
      fontFamily: {
        Roboto: ['Roboto', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: [],
}

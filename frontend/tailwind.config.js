/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        themegreen: '#25db79',
        themered: '#d91852ff',
      },

      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Add Poppins font
      },
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content:["./src/**/*.{js,jsx}"],
    theme: {
    extend: {
      fontFamily: {
        'primary': ['Outfit', 'sans-serif'],
        'secondary': ['Ephesis', 'cursive']
      },
      spacing: {
        '1/6': '16.67%'
      },
      colors: {
        'dark':'#141414',
        'second-dark' : '#222222',
        'light':'#ffffff',
        'principal': '#7B61FF',
        'gray-bg': '#F8F8F8'
      },
      zIndex: {
        '60': '60',
        '70': '70'
      },
      boxShadow:{
        'bar': '-10px 0 15px -3px rgb(0 0 0 / 0.1), -4px 0 6px -1px rgb(0 0 0 / 0.1)'
      }
    },
  },
  plugins: [],
}

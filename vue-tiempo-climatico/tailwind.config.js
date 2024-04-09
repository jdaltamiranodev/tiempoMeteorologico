/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./node_modules/flowbite/**/*.js",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary-light":"#00668A",
        "secundary-dark":"#004E71",
      },
    },
    fontFamily:{roboto:["Roboto, sans-serif"],
   },  
   container:{
    padding:"2rem",
    center: true,
   },
   screens: {
    sm:"640px",
    md:"768px",
   },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
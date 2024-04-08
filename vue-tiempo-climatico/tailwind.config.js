/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",".src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      color:{
        "primary-light":"#00668a",
        "secundary-dark":"#004e71",
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
  plugins: [],
}


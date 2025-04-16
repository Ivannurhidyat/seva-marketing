 /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",        // ⬅️ File HTML utama di root
    "./public/**/*.js",        // ⬅️ Scan file JS jika kamu pakai class Tailwind di JS
    ],
  theme: {
    extend: {
      colors: {
        'dark': '#070607'
      },
      backgroundImage: {
        'gradient-custom': 'linear-gradient(256.72deg, #F939E4 24.19%, #329BEE 69.88%)',
      },
    },
    fontFamily: {
      primary: 'Playfair Display',
      secondry: 'Inter',
    },
    // container:{
    //   center: true,
    //   padding: '1rem',
    // },
    // screens: {
    //   'sm': '640px',
    //   'md': '768px',
    //   'lg': '960px',
    //   'xl': '1200px',
    // },
  },
  plugins: [],
}
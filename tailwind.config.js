 /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js}",
    "./*.html",
    "./public/**/*.html",
    "./public/js/**/*.js",
    ],
  theme: {
    screens: {
      sm: "540px",
      // => @media (min-width: 576px) { ... }

      md: "720px",
      // => @media (min-width: 768px) { ... }

      lg: "960px",
      // => @media (min-width: 992px) { ... }

      xl: "1140px",
      // => @media (min-width: 1200px) { ... }

      "2xl": "1320px",
      // => @media (min-width: 1400px) { ... }
    },
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        'dark': '#070607'
      },
      backgroundImage: {
        'gradient-custom': 'linear-gradient(256.72deg, #F939E4 24.19%, #329BEE 69.88%)',
        'gradient-image-card': 'linear-gradient(212.23deg, rgba(250, 110, 197, 0.82) 26.81%, rgba(50, 155, 238, 0.82) 81.8%)',
      },
    },
    fontFamily: {
      primary: 'Playfair Display',
      secondry: 'Inter',
    },
  },
  plugins: [
    require('tailwindcss-motion'),
    require('tailwindcss-intersect'),
  ], 
}
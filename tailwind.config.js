/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}', './node_modules/flowbite/**/*.js'],
  darkMode: 'class',
  theme: {
    screens: {
      xs: '425px',
      // Mobile
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      md2:'800px',

      md3:'900px',


      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      'lg1':'1156',

      xl: '1200px',
      // => @media (min-width: 1280px) { ... }

      xxl: '1400px',
      // => @media (min-width: 1536px) { ... }

      '2xl': '1650px',

      xxxl: '1700px',

      // => @media (min-width: 2000px) { ... }
      xxxl: '2000px',

      xxxxl: '2500px',
    },

    extend: {},
  },
  plugins: [require('flowbite/plugin')],
};

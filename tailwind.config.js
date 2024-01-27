/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'footer': '#764701',
        'bg-footer': '#fb1',
        'bg-span': 'rgba(0,0,0,.3)',
      },
      backgroundImage: {
        'auth': "url('/src/public/login.jpg')",
      },
      gridArea: {
        custom: '1 / 1 / span 2 / 3',
    },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('tailwindcss-grid-area'),
],
}


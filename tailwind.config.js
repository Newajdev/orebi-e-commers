/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        lightGray: '#767676',
        Prime: '#F5F5F3',
        black: '#262626'
      }
    },
  },
  plugins: [],
}


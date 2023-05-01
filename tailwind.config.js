/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'btn-color': '#F9A51A',
      }
    }
  },
  daisyui: {
    themes: ['cupcake'],
  },
  plugins: [require('daisyui')],
}
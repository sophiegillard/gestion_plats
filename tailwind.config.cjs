/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        'light-blue': '#3c85c6',
        'dark-blue':'#36337e',
        'red-button':'#fc4b6c',
        'red-button-hover':'rgb(204,61,88)',
        'green-button':'#28a745',
        'green-button-hover':'#238139',
        'purple-button':'#7367f0',
        'purple-button-hover':'#554cb0',
        'light-grey':'#ecf0f1',
        'light-grey-hover':'rgba(195,198,199,0.68)',
        'font-main':'#455a64',
        'font-main-hover':'#2a373d',
        'medium-grey':'#d1d3d3',
        'transparent-white':'rgba(255,255,255,0.39)',
        'transparent-white-hover':'rgba(255,255,255,0.57)'
      },
    },
  },
  plugins: [],
}
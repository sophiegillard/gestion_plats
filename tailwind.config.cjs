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
        'green-button':'#28a745',
        'purple-button':'#7367f0',
        'light-grey':'#ecf0f1',
        'font-main':'#212121'
      },
    },
  },
  plugins: [],
}
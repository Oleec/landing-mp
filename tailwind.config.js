/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        'mentagreen': '#99ff99',
        'mentadark': '#171717',
        'mentagray': '#949494',
        'primary': '#99ff99',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}; 
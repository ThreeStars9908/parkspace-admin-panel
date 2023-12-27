/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.vue', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      backgroundImage: {
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('flowbite/plugin')
  ],
}

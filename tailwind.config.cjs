/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#9824c5',
      }
    },
    colors: {
      blue: {
        DEFAULT: '#3f83f8',
      },
    }
  },
  plugins: [
    require('flowbite/plugin')
  ]
}

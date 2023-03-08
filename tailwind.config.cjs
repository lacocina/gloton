/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    fontFamily: {
      'sans': ['Nunito', 'system-ui']
    },
    extend: {
      borderRadius: {
        DEFAULT: '2px',
      },
      colors: {
        primary: {
          '100': '#FFF5E0',
          '200': '#F5D392',
          '300': '#f0c959',
          '400': '#ecb333',
          '500': '#e3931a',
          '600': '#ca7115',
          '700': '#a85115',
          '800': '#893f17',
          '900': '#713516',
        },
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}

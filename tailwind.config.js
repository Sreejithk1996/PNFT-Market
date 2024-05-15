/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    screens: {
    'sm': {'min': '0px', 'max': '767px'},
    'md': {'min': '768px', 'max': '1023px'},
    'lg': {'min': '1024px', 'max': '1279px'},
    'xl': {'min': '1280px', 'max': '1535px'},
    '2xl': {'min': '1536px','max': '1919px'},
    '3xl': {'min': '1920px'},
    },
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}


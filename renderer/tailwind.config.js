/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './renderer/pages/**/*.{js,ts,jsx,tsx}',
    './renderer/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      'black': '#333745',
      'pink': '#E63462',
      'red': '#FE5F55',
      'green': '#C7EFCF',
      'white': '#EEF5DB',
    },
    extend: {},
  },
  plugins: [],
}

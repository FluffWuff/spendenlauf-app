/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './renderer/pages/**/*.{js,ts,jsx,tsx}',
    './renderer/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      'background': '#3f3047',
      'primary': '#a2d6f9',
      'primary-second': '#5171a5',
      'secondary': '#ffc600',
      'secondary-second': '#f87060',
    },
    extend: {},
  },
  plugins: [],
}

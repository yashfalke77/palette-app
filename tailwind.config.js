/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/styles/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'gilroy': ['Gilroy', 'sans-serif']
      },
      colors: {
        'primary': '#0066ff',
        'primary-light': '#005ce6',
        'primary-dark': '#0052cc',
        'black': '#000000',
        'white': '#ffffff',
      },
    },
  },
  plugins: [],
}

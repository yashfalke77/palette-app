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
        'gilroy': ['Inter', 'sans-serif']
      },
      colors: {
        'primary': {
          '200': '#0066ff',
          '400': '#005ce6',
          '600': '#0052cc',
        },
        'black': '#000000',
        'white': '#ffffff',
      },
      fontSize: {
        sm: '1.2rem',
        base: '1.6rem',
        xl: '2rem',
        '2xl': '2.6rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      },
      screens: {
        'sm': '600px',
        'md': '960px',
        'lg': '1280px',
        'xl': '1440px',
        'max-xl': { 'max': '1440px' },
        'max-lg': { 'max': '1279px' },
        'max-md': { 'max': '960px' },
        'max-sm': { 'max': '600px' },
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    'animation': {
      'gradient-x':'gradient-x 15s ease infinite',
      'gradient-y':'gradient-y 15s ease infinite',
      'gradient-xy':'gradient-xy 15s ease infinite',
      'text': 'text 5s ease infinite',
  },
  'keyframes': {
    'text': {
      '0%, 100%': {
        'background-size': '200% 200%',
        'background-position': 'left center',
      },
      '50%': {
        'background-size': '200% 200%',
        'background-position': 'right center',
      },
    },
      'gradient-y': {
          '0%, 100%': {
              'background-size':'400% 400%',
              'background-position': 'center top'
          },
          '50%': {
              'background-size':'200% 200%',
              'background-position': 'center center'
          }
      },
      'gradient-x': {
          '0%, 100%': {
              'background-size':'200% 200%',
              'background-position': 'left center'
          },
          '50%': {
              'background-size':'200% 200%',
              'background-position': 'right center'
          }
      },
      'gradient-xy': {
          '0%, 100%': {
              'background-size':'400% 400%',
              'background-position': 'left center'
          },
          '50%': {
              'background-size':'200% 200%',
              'background-position': 'right center'
          }
      }
  },
  extend: {
    colors: {
      'primaryGrad': '#06b6d4',
      'secondaryGrad': '#3b82f6',
      'transparent': 'transparent',
      'current': 'currentColor',
      'black': colors.black,
      'white': colors.white,
      'gray': colors.gray,
      'red': colors.red,
      'yellow': colors.yellow,
      'green': colors.green,
      'blue': colors.blue,
      'indigo': colors.indigo,
      'purple': colors.purple,
      'pink': colors.pink,
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif']
    },
  },
  },
  plugins: [],
}

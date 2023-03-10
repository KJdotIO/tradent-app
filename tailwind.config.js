/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primaryGrad': '#06b6d4',
      'secondaryGrad': '#3b82f6'
    },
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      },
    },
  },
  plugins: [],
}

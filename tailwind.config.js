/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#D64444',
        'text-dark': '#212529',
        'text-light': '#6C757D',
        'bg-light': '#FFFBF7',
      },
      fontFamily: {
        'manrope': ['Manrope', 'sans-serif'],
        'raleway': ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
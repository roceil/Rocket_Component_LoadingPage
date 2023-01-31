/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        }
      },
      animation: {
        wiggle: 'wiggle 1.5s linear',
      }
    },
  },
  plugins: [],
}
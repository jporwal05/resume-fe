/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-off-white': '#f9f9f9',
      },
    },
    fontFamily: {
      'mono': ['"Courier New"', 'monospace'],
    },
  },
  plugins: [],
}

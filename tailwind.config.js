/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'off-white': '#f9f9f9',
      },
    },
    fontFamily: {
      'mono': ['"Roboto Mono"', 'monospace'],
    },
  },
  plugins: [],
}

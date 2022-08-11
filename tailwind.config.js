/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        '1': '1px',
      },
      animation: {
        'spin180': 'spin only by 180 degree',
      },
      keyframes: {
        spin180: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      fontFamily: {
        aleo: ['Aleo', 'serif'],
        ibm: ['IBM Plex Serif', 'serif'],
      },
      colors: {
        'footer-blue': '#0d112b',
      },
    },
  },
  plugins: [],
}

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
        'spin180': 'spin180 1s ease-in-out infinite',
        'header': 'header 1s ease-in-out',
      },
      keyframes: {
        spin180: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        header: {
          '0%': { transform: 'rotate(-3deg)' },
          '100%': { transform: 'rotate(3deg)' },
        }
      },
      fontFamily: {
        aleo: ['Aleo', 'serif'],
        ibm: ['IBM Plex Serif', 'serif'],
      },
      colors: {
        'footer-blue': '#0d112b',
        'header-gray': '#f4f4f6',
      },
      margin: {
        '26px': '26px',
      },
      fontSize: {
        '2xs': '.625rem',
        'tiny': '.937rem',
      },
      lineHeight: {
        '78px': '78px',
      }
    },
  },
  plugins: [],
}

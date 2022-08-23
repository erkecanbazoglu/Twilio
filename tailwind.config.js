/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      borderWidth: {
        1: '1px',
      },
      animation: {
        pulse2: 'pulse 0.3s linear infinite',
      },
      keyframes: {
        pulse: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
      },
      fontFamily: {
        aleo: ['Aleo', 'serif'],
        ibm: ['IBM Plex Serif', 'serif'],
      },
      colors: {
        'footer-blue': '#0d112b',
        'header-gray': '#f4f4f6',
        'main-orange': '#fef5ee',
        'main-red': '#d61f1f',
        'main-dark-blue': '#030b5d',
      },
      margin: {
        '26px': '26px',
      },
      fontSize: {
        '2xs': '.625rem',
        tiny: '.937rem',
      },
      lineHeight: {
        '78px': '78px',
      },
      width: {
        '615px': '615px',
        '1230px': '1230px',
      },
      height: {
        '480px': '480px',
      },
      padding: {
        25: '98px',
        '75px': '75px',
        '110px': '110px',
      },
      minHeight: {
        '700px': '700px',
      },
    },
  },
  plugins: [],
};

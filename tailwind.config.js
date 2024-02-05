const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */

// const primary = '#006D77';
// const secondary = '#83C5BE';
// const tertiary = '#E29578';

const primary = '#16697A';
const secondary = '#82C0CC';
const tertiary = '#FFA62B';
const offWhite = '#EDE7E3';

module.exports = {
  content: ["./src/**/*.{html,js,jsx}",  'node_modules/preline/dist/*.js'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        'blinking-bg': {
            '0%, 100%': { backgroundColor: primary },
            '50%': { backgroundColor: secondary },
        },
      },
      animation: {
          'blinking-bg': 'blinking-bg 3s ease-in-out infinite',
      },
      colors: {
        brand: tertiary,
        'off-white': offWhite,
        primary,
        secondary,        
        tertiary,
      }
    },
  
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('preline/plugin'),
  ],
  safelist: [{
    pattern: /(bg|text|border|outline|fill)-(primary|secondary)/
  }],
}


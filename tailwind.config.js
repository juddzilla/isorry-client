const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,jsx}",  'node_modules/preline/dist/*.js'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        'blinking-bg': {
            '0%, 100%': { backgroundColor: 'rgb(34,127,234)' },
            '50%': { backgroundColor: 'rgb(192,211,238)' },
        }
      },
      animation: {
          'blinking-bg': 'blinking-bg 3s ease-in-out infinite',
      },
      colors: {
        primary: 'rgb(34,127,234)',
        secondary: 'rgb(192,211,238)'
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


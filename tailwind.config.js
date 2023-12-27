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
            '0%, 100%': { backgroundColor: '#ef4444' },
            '50%': { backgroundColor: '#fee2e2' },
        }
      },
      animation: {
          'blinking-bg': 'blinking-bg 3s ease-in-out infinite',
      }
    },
  
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('preline/plugin'),
  ],
}


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
        secondary: 'rgb(192,211,238)',
        a1: '#FEC5BB',
        a2: '#FCD5CE',
        a3: '#FAE1DD',
        a4: '#F8EDEB',
        a5: '#E8E8E4',
        a6: '#D8E2DC',
        a7: '#ECE4DB',
        a8: '#FFE5D9',
        a9: '#FFD7BA',
        a10: '#FEC89A',
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


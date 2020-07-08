const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        tecGreen: {
          '100': '#beff33',
          '200': '#b8ff1f',
          '300': '#B1FF0A',
          '400': '#A7F500',
          '500': '#93D700',
          '600': '#8BCC00',
          '700': '#7DB800',
          '800': '#70A300',
          '900': '#628f00',
        },
        tecPink: {
          '100': '#e85eda',
          '200': '#e64cd6',
          '300': '#e33bd2',
          '400': '#e029ce',
          '500': '#d31ec1',
          '600': '#c41cb4',
          '700': '#b319a3',
          '800': '#a11793',
          '900': '#8f1483',
        },
        facebook: '#39569c',
        twitter: '#26a7de',
        instagram: '#c32aa3',
        youtube: '#b2071d',
      },
    },
    container: {
      center: true,
      padding: {
        default: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
      },
    },
  },
  variants: {},
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.dark-right': {
          backgroundImage:
            'linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,0.9))',
        },
        '.dark-left': {
          backgroundImage:
            'linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,0.9))',
        },
        '.dark-top': {
          backgroundImage:
            'linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,0.9))',
        },
        '.dark-bottom': {
          backgroundImage:
            'linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.9))',
        },
        '.dark-none': {
          backgroundImage: '',
        },
      }

      addUtilities(newUtilities, ['responsive'])
    }),
  ],
}

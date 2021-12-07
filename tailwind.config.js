module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        '-69': '-69',
      },
      colors: {
        'lrred': '#eb2754',
        'lrtext-white': '#ddd',
      },
      fill: {
        transparent: 'transparent',
      },
      stroke: {
        transparent: 'transparent',
        'lrred': '#eb2754',
      },
      strokeWidth: {
        '0.5': '0.5',
        '3': '3',
        '4': '4',
      },
      transitionDuration: {
        '0': '0ms',
        '800': '800ms',
        '2000': '2000ms',
      },
      transitionDelay: {
        '0': '0ms',
        '2000': '2000ms',
      },
      transitionTimingFunction: {
        'default': 'ease',
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

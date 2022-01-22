/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme');

const withOpacity =
  (variable) =>
  ({ opacityValue }) =>
    opacityValue === undefined ? `rgb(var(${variable}))` : `rgb(var(${variable}) / ${opacityValue})`;

const getColorShades = (shades, name = 'primary') =>
  shades.reduce((a, v) => ({ ...a, [v]: withOpacity(`--tw-clr-${name}-${v}`) }), {});

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        primary: ['Roboto', ...fontFamily.sans],
      },
      zIndex: {
        '-69': '-69',
      },
      colors: {
        lrred: '#eb2754',
        lrmaroon: '#992323',
        'lrtext-white': '#ddd',
        // Customize it on globals.css :root
        primary: getColorShades([50, 100, 200, 300, 400, 500, 600, 700]),
      },
      fill: {
        transparent: 'transparent',
      },
      stroke: {
        transparent: 'transparent',
        lrred: '#eb2754',
      },
      strokeWidth: {
        0.5: '0.5',
        3: '3',
        4: '4',
      },
      transitionDuration: {
        0: '0ms',
        800: '800ms',
        2000: '2000ms',
      },
      transitionDelay: {
        0: '0ms',
        2000: '2000ms',
      },
      transitionTimingFunction: {
        default: 'ease',
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
      cursor: {
        newtab: "url('/images/new-tab.png') 10 10, pointer",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        '-69': '-69',
      },
      colors: {
        'lrred': '#eb2754',
        'lrtext-white': '#ddd',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

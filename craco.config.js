/* eslint-disable global-require */
module.exports = {
  style: {
    postcss: {
      plugins: [
        // eslint-disable-next-line import/no-extraneous-dependencies
        require('tailwindcss'),
        // eslint-disable-next-line import/no-extraneous-dependencies
        require('autoprefixer'),
      ],
    },
  },
};

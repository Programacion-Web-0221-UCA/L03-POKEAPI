module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
      'oswald': ['Oswald', 'san-serif']
    },
    minHeight: {
      'fullscreen': '100vh'
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

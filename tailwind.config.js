module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': [ 'Roboto'],
    },
    extend: {
      colors: {
        'red-rgba': 'rgba(255, 0, 43, 0.85)'
      },
      fontFamily: {
        XHarp: ["XHarp", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
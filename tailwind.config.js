module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '68': '17rem'
      }
    },
  },
  variants: {
    extend: {
      scale: ['active', 'group-hover'],
      letterSpacing: ['hover', 'focus', 'group-hover'],
    },
  },
  plugins: [],
}

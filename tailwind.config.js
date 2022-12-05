module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'orange': '#FF6633',
      'white': '#FFFFFF',
      'black': '#000',
      'transparent': 'transparent',
      'green': '#29CC39',
      'purple': '#8833FF',
      'telegram': '#33BFFF',
      'whale': {
        fin: '#ADB8CC',
        minke: '#7D8FB3',
        bowhead: '#6B7A99',
        blue: '#4D5E80',
        gray: '#EDEFF2',
        killer: '#C3CAD9',
      }
    },
    boxShadow: {
      'soft': '0px 2px 5px rgba(0, 0, 0, 0.04)',
    },
    flex: {
      '20': '1 1 20%',
      '26': '1 1 26%',
      '60': '1 1 60%',
    },
  },
  plugins: [],
}

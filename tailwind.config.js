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
      'green': 'green',
      'background': '#F7F8FA',
      'stone': '#FAFBFC',
      'whale': {
        fin: '#ADB8CC',
        minke: '#7D8FB3',
        bowhead: '#6B7A99',
        blue: '#4D5E80',
        gray: '#EDEFF2',
        killer: '#C3CAD9',
        white: '#F5F6F7',
      }
    },
    boxShadow: {
      'soft': '0px 2px 5px rgba(0, 0, 0, 0.03)',
      'extrasoft': '0px 10px 30px rgba(0, 0, 0, 0.03)',
      'soft-orange': '0px 5px 30px rgba(255, 102, 51, 0.3)',
    },
    flex: {
      '20': '1 1 20%',
      '25': '1 1 25%',
      '26': '1 1 26%',
      '74': '1 1 74%',
      '60': '1 1 60%',
      '50': '1 1 50%',
    },
  },
  plugins: [],
}

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      'xs': '14px',
      'sm': '16px',
      'tiny': '28px',
      'base': '32px',
      'lg': '56px',
      'xl': '100px',
      '2xl': '150px',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    extend: {
      colors: {
        'dark': '#0b0d17',
        'primary': '#ffffff',
        'secondary': '#d0d6f9',
      },
      fontFamily: {
        'bellefair': ['Bellefair', 'serif'],
        'barlow': ['Barlow Condensed', 'sans-serif'],
      }
    },
  },

  plugins: [],
}
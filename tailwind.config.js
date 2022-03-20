const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
      fontFamily: {
        display: [
          'Noto Sans Thai',
          'Noto Sans',
          'Inter var',
          'SF Pro Display',
          ...defaultTheme.fontFamily.sans,
        ],
      },
      colors: {
        cream: '#FFE7BD',
        coral: '#E5340B',
        '70syellow': '#F28A0F',
        '70sblue': '#0C5679',
        '70slblue': '#3F8A8C',
        new_gray: '#FEFEFE',
      },
    },
  },
  plugins: [require('daisyui')],
}

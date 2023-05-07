/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    screens: {
      xs: '640px',
      sm: '768px',
      md: '992px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'primary-menu-color': '#010101',
        'secondary-menu-color': '#121418',
        'w-gray': '#343a40',
        'w-light-white': '#fafafa26',
        'w-white': '#111418',
        'primary-light-color': '#ffffff',
        'secondary-light-color': '#f8f9fa',
        'primary-dark-color': '#212529',
        'secondary-dark-color': '#343a40',
        primary: '#fd7e14',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        quicksand: ['Quicksand', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

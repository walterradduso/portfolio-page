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
      animation: {
        'fade-in-down': 'fadeInDown 1.5s infinite',
      },
      colors: {
        'primary-menu-color': '#010101',
        'secondary-menu-color': '#121418',
        'w-gray': '#343a40',
        'primary-light-gray': '#dee3e4',
        'primary-dark-gray': '#6c757d',
        'w-light-white': '#fafafa26',
        'w-white': '#111418',
        'primary-light-color': '#ffffff',
        'secondary-light-color': '#f8f9fa',
        'primary-dark-color': '#212529',
        'secondary-dark-color': '#343a40',
        primary: '#0d6efd',
        dark: '#333333',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        quicksand: ['Quicksand', 'sans-serif'],
      },
      keyframes: {
        fadeInDown: {
          '0%': {
            opacity: 0,
            transform: 'translateY(-20px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0px)',
          },
        },
      },
    },
  },
  plugins: [],
};

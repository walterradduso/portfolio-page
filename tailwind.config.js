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
        'custom-bounce': 'customBounce 0.6s',
        'fade-in-down': 'fadeInDown 1.5s infinite',
        'left-enter': 'leftEnter 0.6s',
        'right-enter': 'rightEnter 0.6s',
      },
      backgroundImage: {
        'home-bg': "url('/images/homeBg.jpeg')",
      },
      boxShadow: {
        'dark-icon-timeline': '0 0 0 4px #1f2937',
        'icon-timeline': '0 0 0 4px white',
      },
      colors: {
        'gray-d': '#dddddd',
        'primary-dark-color': '#212529',
        'primary-dark-gray': '#6c757d',
        'primary-light-color': '#ffffff',
        'primary-light-gray': '#dee3e4',
        'primary-menu-color': '#010101',
        'secondary-dark-color': '#343a40',
        'secondary-light-color': '#f8f9fa',
        'secondary-menu-color': '#121418',
        'w-gray-2': '#eaeaea',
        'w-gray': '#343a40',
        'w-light-white': '#fafafa26',
        'w-red': '#c90e0e',
        'w-white': '#111418',
        dark: '#333333',
        light: '#f5f5f5',
        primary: '#4B84E0',
        secondary: '#04b4e0',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        quicksand: ['Quicksand', 'sans-serif'],
      },
      fontSize: {
        'fluid-title': 'calc(1.95rem + 8.4vw)',
      },
      keyframes: {
        customBounce: {
          '0%': {
            opacity: '0',
            transform: 'scale(0.5)',
          },
          '60%': {
            opacity: '1',
            transform: 'scale(1.2)',
          },
          '100%': {
            transform: 'scale(1)',
          },
        },
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
        leftEnter: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-100px)',
          },
          '60%': {
            opacity: '1',
            transform: 'translateX(20px)',
          },
          '100%': {
            transform: 'translateX(0)',
          },
        },
        rightEnter: {
          '0%': {
            opacity: '0',
            transform: 'translateX(100px)',
          },
          '60%': {
            opacity: '1',
            transform: 'translateX(-20px)',
          },
          '100%': {
            transform: 'translateX(0)',
          },
        },
      },
      width: {
        30: '7.5rem',
      },
    },
  },
  plugins: [],
};

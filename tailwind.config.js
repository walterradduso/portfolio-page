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
      boxShadow: {
        'dark-icon-timeline': '0 0 0 4px #1f2937',
        'icon-timeline': '0 0 0 4px white',
      },
      colors: {
        'primary-menu-color': '#010101',
        'secondary-menu-color': '#121418',
        'w-gray': '#343a40',
        'w-gray-2': '#eaeaea',
        'primary-light-gray': '#dee3e4',
        'primary-dark-gray': '#6c757d',
        'w-light-white': '#fafafa26',
        'w-white': '#111418',
        'primary-light-color': '#ffffff',
        'secondary-light-color': '#f8f9fa',
        'primary-dark-color': '#212529',
        'secondary-dark-color': '#343a40',
        dark: '#333333',
        primary: '#0d6efd',
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

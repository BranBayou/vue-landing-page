/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fafaf9',
          100: '#f5f5f4',
          500: '#57534e',
          600: '#44403c',
          700: '#292524',
        },
        accent: {
          500: '#10b981',
          600: '#059669',
        },
      },
      boxShadow: {
        soft: '0 10px 30px -15px rgba(15, 23, 42, 0.2)',
      },
    },
  },
  plugins: [],
}


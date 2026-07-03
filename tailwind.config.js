/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        campus: {
          50: '#effcf4',
          100: '#d9f8e6',
          200: '#b8efcf',
          300: '#86dfaa',
          400: '#4ec97f',
          500: '#24ad61',
          600: '#168d4b',
          700: '#126f3d',
          800: '#105832',
          900: '#0d482b',
        },
      },
      boxShadow: {
        soft: '0 14px 32px rgba(21, 128, 61, 0.12)',
        float: '0 12px 34px rgba(15, 82, 48, 0.18)',
      },
    },
  },
  plugins: [],
};

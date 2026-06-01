/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Garamond', 'Georgia', 'serif'],
        sans: ['Roboto', 'Helvetica', 'Lato', 'sans-serif'],
      },
      colors: {
        navy: {
          800: '#1a237e',
          900: '#0d1442',
        },
        'warm-off-white': '#faf9f6',
        beige: {
          100: '#f5f0e6',
          200: '#e8e0d0',
        },
        'link-blue': '#0066cc',
        'badge-green': {
          bg: '#d4edda',
          text: '#155724',
        },
        gold: {
          300: '#f5d78e',
          400: '#e8c76e',
          500: '#d4a84b',
          600: '#c49a3c',
        },
      },
      boxShadow: {
        'card': '0 2px 8px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96",
        primaryDark: "#58E6D9",
      },
      keyframes: {
        pingpong: {
          'to': { transform: 'translateY(20px)' },
        }
      },
      animation: {
        pingpong: 'pingpong 2s infinite ease alternate',
      }
    },
  },
  plugins: [],
}
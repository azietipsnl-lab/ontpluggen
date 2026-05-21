/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#9f402d',
        'primary-container': '#e2725b',
        secondary: '#56642b',
        'secondary-container': '#d6e7a1',
        tertiary: '#695c4f',
        surface: '#fbf9f4',
        background: '#fbf9f4',
        outline: '#89726d',
        'outline-variant': '#ddc0ba',
        'on-surface': '#1b1c19',
        'on-surface-variant': '#56423e',
        'inverse-surface': '#30312e',
        'surface-container-low': '#f5f3ee',
        'surface-container': '#f0eee9',
        'surface-container-high': '#eae8e3',
        'surface-container-highest': '#e4e2dd',
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        sans: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    colors: {
      white: '#FFFFFF',
      'primary-green': '#528135',
      'secondary-green': '#E2EED9',
      'important-red': '#D97171',
    },
    fontFamily: {
      sans: ['Calibri', 'sans-serif'],
      serif: ['Calibri', 'serif'],
    },
    container: {
      center: true,
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};

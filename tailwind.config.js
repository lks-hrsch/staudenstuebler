/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background': "url('~/assets/images/background.jpg')"
      }
    },
    container: {
      center: true,
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}

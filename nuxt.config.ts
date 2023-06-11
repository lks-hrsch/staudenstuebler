// https://nuxt.com/docs/guide/directory-structure/nuxt.config
import { defineNuxtConfig } from 'nuxt/config';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/eslint-module'],
  css: ['~/assets/css/main.css'],
  build: {
    // https://github.com/tailwindlabs/heroicons/issues/564
    transpile: ['@heroicons/vue'],
  },
});

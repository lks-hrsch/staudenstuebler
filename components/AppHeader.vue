<template>
  <header
    class="sticky top-0 w-full h-16 z-10 bg-primary-green bg-opacity-90 text-2xl text-white"
  >
    <nav class="container h-full">
      <div class="flex flex-row gap-4 list-none items-center h-full">
        <NuxtLink to="/">Startseite</NuxtLink>
        <div class="flex flex-row items-center">
          <NuxtLink to="/about">Über uns</NuxtLink>
          <ChevronDownIcon
            class="cursor-pointer w-5"
            @click="about_dropdown = !about_dropdown"
          />
          <!-- Collapsible Dropdown -->
          <div
            v-show="about_dropdown"
            class="absolute flex flex-col items-center justify-evenly h-24 -bottom-24 gap-2 bg-primary-green bg-opacity-90 text-2xl text-white shadow-inner px-3"
          >
            <NuxtLink to="/about">Familienbetrieb</NuxtLink>
            <NuxtLink to="/our-garden">Pflanzengarten</NuxtLink>
          </div>
        </div>
        <NuxtLink to="/service">Service</NuxtLink>
        <NuxtLink to="/plant-listings">Pflanzenlisten</NuxtLink>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ChevronDownIcon } from '@heroicons/vue/24/outline/esm/index.js';
</script>

<script>
export default {
  data() {
    return {
      about_dropdown: false,
    };
  },
};
</script>

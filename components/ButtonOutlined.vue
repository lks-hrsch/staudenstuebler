<template>
  <button
    class="text-primary-green font-bold text-lg border border-primary-green rounded-lg py-2 px-6"
  >
    <div class="flex flex-row justify-between items-center">
      <div class="flex flex-col justify-start text-left">
        <slot />
      </div>
      <ArrowRightIcon class="w-6 h-6" />
    </div>
  </button>
</template>

<script setup>
import { ArrowRightIcon } from '@heroicons/vue/24/outline/esm/index.js';
</script>

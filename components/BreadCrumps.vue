<template>
  <div class="flex flex-row gap-2 items-center">
    <a href="/">
      <HomeIcon class="w-5 h-5" />
    </a>
    <a href="/">Startseite</a>
    <div
      v-for="breadCrump in props.breadCrumps"
      :key="breadCrump.text"
      class="flex flex-row gap-2 items-center"
    >
      <div>/</div>
      <a :href="breadCrump.href">{{ breadCrump.text }}</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { HomeIcon } from '@heroicons/vue/24/outline/esm/index.js';

export interface BreadCrump {
  href: string;
  text: string;
}

export interface BreadCrumpProps {
  breadCrumps: BreadCrump[];
}

const props = defineProps<BreadCrumpProps>();
</script>

<template>
  <img :src="props.src" :alt="props.alt" />
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

export interface ImageProps {
  src: string;
  alt: string;
}

const props = defineProps<ImageProps>();
</script>

<style>
img {
  max-height: none;
  max-width: none;
  object-fit: cover;
}
</style>

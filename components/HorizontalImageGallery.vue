<template>
  <Card>
    <!-- images of the company -->
    <!-- fade out images that exceed the width of the card -->
    <div class="overflow-x-scroll">
      <div class="flex flex-row flex-nowrap gap-4 items-center">
        <!-- images -->
        <Image
          v-for="image in props.images"
          :key="image.src"
          :src="image.src"
          :alt="image.alt"
          class="rounded-xl w-96 h-96"
        />
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { ImageProps } from '~~/components/Image.vue';

interface Props {
  images: ImageProps[];
}

const props = defineProps<Props>();
</script>

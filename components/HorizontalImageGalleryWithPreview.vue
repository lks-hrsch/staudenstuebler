<template>
  <Card>
    <div class="grid grid-cols-4 justify-items-center">
      <div class="relative col-span-2 row-span-2 self-center">
        <Image
          :src="getCurrentImage().src"
          :alt="getCurrentImage().alt"
          class="rounded-xl w-[500px] h-[500px]"
        />
        <button class="absolute inset-y-0 left-0" @click="previousImage">
          <ChevronLeftIcon class="w-8 h-8 text-white" />
        </button>
        <button class="absolute inset-y-0 right-0" @click="nextImage">
          <ChevronRightIcon class="w-8 h-8 text-white" />
        </button>
      </div>
      <Image
        v-for="image in getNext4Images()"
        :key="image.src"
        :src="image.src"
        :alt="image.alt"
        class="rounded-xl w-[240px] h-[240px] self-center"
      />
    </div>
  </Card>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/vue/24/outline/esm/index.js';
import { ImageProps } from '~~/components/Image.vue';

interface Props {
  images: ImageProps[];
}

const props = defineProps<Props>();
const currentIndex = ref(0);

function getCurrentImage() {
  return props.images[currentIndex.value];
}

function getNext4Images() {
  return props.images.slice(currentIndex.value + 1, currentIndex.value + 5);
}

function previousImage() {
  currentIndex.value =
    (currentIndex.value - 1 + props.images.length) % props.images.length;
}

function nextImage() {
  currentIndex.value = (currentIndex.value + 1) % props.images.length;
}
</script>

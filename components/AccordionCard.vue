<!-- https://codesandbox.io/s/accordion-vue-js-1czqh?from-embed=&file=/src/components/AppAccordion.vue:711-754 -->
<template>
  <Card>
    <div class="flex flex-col">
      <div class="flex flex-row justify-between" @click="toggleAccordion()">
        <TitleLevel0Left :title="props.title" />
        <ChevronUpIcon v-if="isOpen" class="self-center w-6 h-6" />
        <ChevronDownIcon v-else class="self-center w-6 h-6" />
      </div>

      <div v-show="isOpen">
        <slot />
      </div>
    </div>
  </Card>
</template>

<script></script>

<script setup>
import { defineProps, reactive } from 'vue';
import {
  ChevronDownIcon,
  ChevronUpIcon,
} from '@heroicons/vue/24/outline/esm/index.js';

const props = defineProps(['title']);

const isOpen = reactive(false);

const toggleAccordion = () => {
  isOpen.value = !isOpen.value;
};
</script>

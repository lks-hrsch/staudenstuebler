<template>
  <div
    class="block event-block rounded px-4 py-4 mt-1 mb-1 bg-secondary-green hover:bg-primary-green text-lg"
  >
    <div class="flex flex-row">
      <div
        class="flex flex-col grow cursor-pointer"
        @click="openModal = !openModal"
      >
        <div class="font-bold text-primary-green text-on-hover text-xl">
          {{ event.eventTitle }}
        </div>
        <div class="text-on-hover">
          <div v-if="getDateStringAtIndex(0) !== getDateStringAtIndex(-1)">
            {{ getDateDayStringAtIndex(0) }} - {{ getDateStringAtIndex(-1) }}
          </div>
          <div v-else>
            {{ getDateStringAtIndex(0) }}
          </div>
        </div>
      </div>
      <div v-if="event.eventLink" class="flex-none content-center">
        <ArrowTopRightOnSquareIcon
          class="cursor-pointer w-6 h-6"
          @click="redirectExternalEventPage()"
        />
      </div>
      <EventModal :open="openModal" :event="event" />
    </div>
  </div>
</template>

<script>
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString?retiredLocale=de
</script>

<script setup>
import { defineProps, reactive } from 'vue';
import { ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/outline/esm/index.js';

const props = defineProps(['event']);

const openModal = reactive(false);

const getDateStringAtIndex = (index) => {
  const date = props.event.eventDate.at(index);
  const string = date.toLocaleDateString('de-DE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  return string;
};

const getDateDayStringAtIndex = (index) => {
  const date = props.event.eventDate.at(index);
  const string = date.toLocaleDateString('de-DE', { day: 'numeric' });
  return string;
};

const redirectExternalEventPage = () => {
  // https://codingbeautydev.com/blog/vue-open-link-in-new-tab/
  window.open(props.event.eventLink, '_blank', 'nereferrer');
};
</script>

<style scoped>
.event-block:hover .text-primary-green {
  color: white !important;
}

.event-block:hover .text-on-hover {
  color: white !important;
}
</style>

<template>
  <div class="text-3xl text-primary-green font-bold pb-9">
    <!-- underline the first word -->
    <span class="border-b-4 border-secondary-green">
      {{ title_words[0] + ' ' }}
    </span>
    <span>
      {{ title_words.slice(1).join(' ') }}
    </span>
  </div>
</template>

<script>
export default {
  props: ['title'],
  // split title into words for underlining the first word
  computed: {
    title_words() {
      return this.title.split(' ');
    },
  },
};
</script>

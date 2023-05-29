<template>
  <div class="text-3xl text-primary-green font-bold pb-9">
    <!-- underline the last word -->
    <span>
      {{ title_words.slice(0, -1).join(' ') + ' ' }}
    </span>
    <span class="border-b-4 border-secondary-green">
      {{ title_words[title_words.length - 1] }}
    </span>
  </div>
</template>

<script>
export default {
  props: ['title'],
  // split title into words for underlining the last word
  computed: {
    title_words() {
      return this.title.split(' ');
    },
  },
};
</script>

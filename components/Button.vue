<template>
  <button class="bg-primary-green rounded-lg text-white w-fit py-2 px-6">
    <div class="text-lg">
      {{ label }}
    </div>
  </button>
</template>

<script>
export default {
  props: ['label'],
};
</script>

<template>
  <div class="flex flex-row">
    <div class="flex w-20">{{ abb }}</div>
    <div class="flex">{{ value }}</div>
  </div>
</template>

<script>
export default {
  props: ['abb', 'value'],
};
</script>

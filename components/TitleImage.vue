<template>
  <div class="title-image relative -top-16 text-white">
    <div class="container pt-32">
      <slot />
    </div>
  </div>
</template>

<style>
.title-image {
  height: 500px;
  background-image: url('~/assets/images/title-image.jpg');
  background-size: cover;
}
</style>

<template>
  <div
    class="self-center relative stone-image-container-parent w-72 h-72 -left-36"
  >
    <div class="absolute bottom-0 z-10 stone-image-container w-72 h-72">
      <slot />
    </div>
    <div
      class="absolute bottom-0 left-32 -rotate-45 stone-image-container w-72 h-72 bg-secondary-green"
    ></div>
  </div>

  <svg
    style="visibility: hidden; position: absolute"
    width="0"
    height="0"
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
  >
    <defs>
      <filter id="rounded">
        <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
        <feColorMatrix
          in="blur"
          mode="matrix"
          values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
          result="rounded"
        />
        <feComposite in="SourceGraphic" in2="rounded" operator="atop" />
      </filter>
    </defs>
  </svg>
</template>

<script>
export default {
  props: ['image', 'link'],
};
</script>

<style>
.stone-image-container-parent {
  filter: url('#rounded');
}

.stone-image-container {
  /* https://unused-css.com/tools/clip-path-generator */
  clip-path: polygon(
    9.4% 0%,
    16.2% 0.3%,
    29.9% 2.2%,
    44.6% 6.8%,
    64% 15.1%,
    84.2% 29.6%,
    93.6% 43.8%,
    95% 50.2%,
    96.5% 56.3%,
    98.2% 64.9%,
    98.9% 70.7%,
    99.7% 75.8%,
    100% 79.5%,
    99.6% 82.2%,
    98.4% 83.8%,
    95% 85.2%,
    50% 98.5%,
    46.7% 99.5%,
    42.9% 100%,
    39.7% 99.1%,
    35.6% 97.4%,
    22.1% 87.8%,
    8.1% 76.1%,
    3.5% 72.4%,
    1.2% 69.5%,
    0% 66.1%,
    0% 62%,
    0.4% 37%,
    1% 24.7%,
    2.2% 17.7%,
    3.3% 12%,
    4.9% 6.9%,
    6.7% 2.3%
  );
}
</style>

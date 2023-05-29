<template>
  <TitleImage>
    <slot name="title"> fallback title </slot>
  </TitleImage>
  <div class="container relative -top-14">
    <slot name="content"> fallback content </slot>
  </div>
</template>

<script setup></script>

<template>
  <div class="parallax"></div>
</template>

<style scoped>
.parallax {
  /* The image used */
  background-image: url('../../src/assets/home_banner.jpg');

  /* Set a specific height */
  min-height: 500px;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  mask-image: linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.65) 100%);
  -webkit-mask-image: linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.65) 100%);
}
</style>

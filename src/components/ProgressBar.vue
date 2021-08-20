<template>
  <article class="track">
    <span class="progress" :style="`width: ${percent}%;`"></span>
  </article>
</template>

<script>
export default {
  name: 'ProgressBar',
  props: {
    percent: {
      type: Number,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.track {
  position: relative;
  width: 300px;
  height: 5px;
  border-radius: $border-radius;
  background-color: $color-font-light-weak;

  .progress {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    height: 100%;
    border-radius: $border-radius;
    background-color: $color-primary;
    transition: width 1s ease;
  }
}
</style>
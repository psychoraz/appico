<template>
  <article>
    <vue-ellipse-progress
      :progress="60"
      :size="100"
      line="round"
      :thickness="10"
      :emptyThickness="10"
      :color="color"
      :emptyColor="`${color}50`"
      :loading="false"
      :legend="false"
    />
  </article>
</template>

<script>
import Vue from 'vue'
import VueEllipseProgress from 'vue-ellipse-progress';
Vue.use(VueEllipseProgress);

export default {
  name: 'ChartPie',
  props: {
    color: {
      type: String,
      required: true
    }
  }
}
</script>
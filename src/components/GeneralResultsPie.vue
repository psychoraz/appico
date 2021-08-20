<template>
  <article>
    <vue-ellipse-progress
      :progress="60"
      :size="100"
      line="round"
      :thickness="10"
      :emptyThickness="10"
      :color="primary ? '#0077FF' : '#F0166D'"
      :emptyColor="primary ? '#0077FF50' : '#F0166D50'"
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
  name: 'GeneralResultsPie',
  props: {
    primary: {
      type: Boolean,
      required: true
    }
  }
}
</script>
<template>
  <img class="logo" :src="src" :alt="alt" @click="openUrl"/>
</template>

<script>
export default {
  name: 'Logo',
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    },
    href: {
      type: String,
      default: ''
    }
  },
  methods: {
    openUrl() {
      window.open(this.href)
    }
  }
}
</script>

<style lang="scss" scoped>
.logo {
  display: block;
  margin: auto;
  cursor: pointer;
}
</style>
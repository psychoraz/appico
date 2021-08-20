<template>
  <article class="info">
    <p v-html="$t('overview.dashboard.support-requests.info', { first: first, last: last, total: total})"></p>
  </article>
</template>

<script>
export default {
  name: 'SupportListInfo',
  props: {
    swiperInstance: {
      type: Object,
      required: true
    },
    perPage: {
      type: Number,
      required: true
    },
    total: {
      type: Number,
      required: true
    }
  },
  computed: {
    first() {
      return this.swiperInstance.activeIndex * this.perPage + 1
    },
    last() {
      return this.swiperInstance.activeIndex * this.perPage + this.perPage
    }
  }
}
</script>

<style lang="scss" scoped>
.info {
  color: $color-font-dark-weak;

  /deep/ .strong {
    color: $color-font-dark-strong;
  }

  /deep/ .total {
    color: $color-font-light-strong;
  }
}
</style>

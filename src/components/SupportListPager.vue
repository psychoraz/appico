<template>
  <article class="pager">
    <span class="text">{{ $t('overview.dashboard.support-requests.pager') }}</span>
    <span v-if="showFirst" class="button --ghost" @click="slideTo(0)">1</span>
    <span v-if="showDotsBefore">...</span>
    <span v-if="showBefore" class="button --ghost" @click="slideTo(currentPage - 2)">{{ currentPage - 1 }}</span>
    <span class="button --active">{{ currentPage }}</span>
    <span v-if="showAfter" class="button --ghost" @click="slideTo(currentPage)">{{ currentPage + 1 }}</span>
    <span v-if="showDotsAfter">...</span>
    <span v-if="showLast" class="button --ghost" @click="slideTo(totalPages - 1)">{{totalPages}}</span>
  </article>
</template>

<script>
export default {
  name: 'SupportListPager',
  props: {
    swiperInstance: {
      type: Object,
      required: true
    }
  },
  computed: {
    currentPage() {
      return this.swiperInstance.activeIndex + 1
    },
    totalPages() {
      return this.swiperInstance.slides.length
    },
    showFirst() {
      return (this.currentPage !== 1)
    },
    showLast() {
      return (this.currentPage !== this.totalPages)
    },
    showBefore() {
      const pageBefore = this.currentPage - 1
      return !(pageBefore < 1) && pageBefore !== 1
    },
    showAfter() {
      const pageAfter = this.currentPage + 1
      return !(pageAfter > this.totalPages) && pageAfter !== this.totalPages
    },
    showDotsBefore() {
      return this.currentPage > 3
    },
    showDotsAfter() {
      return this.currentPage < this.totalPages - 2
    }
  },
  methods: {
    slideTo(index) {
      this.swiperInstance.slideTo(index)
    }
  }
}
</script>

<style lang="scss" scoped>
.pager {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;

  .button {
    box-sizing: content-box;
    font-size: $font-md;
    text-align: center;
    margin: $space-xs;
    padding: $space-sm;
    width: $space-md;
    height: $space-md;
  }

  .text {
    margin-right: $space-sm;
  }
}
</style>
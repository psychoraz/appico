<template>
  <div class="page page--overview page--dashboard">
    <section class="card --transparent">
      <h1 class="title">{{ $t('overview.dashboard.title') }}</h1>
    </section>
    <section class="card">
      <p class="text">{{ $t('dummy.text') }}</p>
    </section>

    <section class="card">
      <swiper :options="swiperOptions" ref="swiperInstance">
        <swiper-slide
          v-for="(value, index) in swiperSlides"
          :key="index"
        >
          {{ value }}
        </swiper-slide>
      </swiper>
      <div
        v-for="(value, index) in swiperSlides"
        :key="index"
      >
      <span @click="slideTo(index)" style='border: 1px solid black'>{{ value }}</span>
      </div>
    </section>
  </div>
</template>

<script>


export default {
  name: 'DashboardPage',
  data() {
    return {
      swiperInstance: false,
      swiperSlides: 9,
      swiperOptions: {
        slidesPerView: 1,
        centeredSlides: true,
        allowTouchMove: true,
        spaceBetween: 15
      }
    }
  },
  methods: {
    slideTo (index) {
      this.swiperInstance.slideTo(index)
    }
  },
  mounted () {
    this.swiperInstance = this.$refs.swiperInstance.$swiper
  }
}
</script>

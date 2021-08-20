<template>
  <section class="card">
    <h3 class="title font-bold font-lg">{{ $t('overview.dashboard.support-requests.title') }}</h3>
    <article v-if="loading">
      <Spinner/>
    </article>

    <section v-show="!loading">
      <TicketLine
        class="table-line"
        :fullname="$t('overview.dashboard.support-requests.header.name')"
        :email="$t('overview.dashboard.support-requests.header.email')"
        :time="$t('overview.dashboard.support-requests.header.time')"
        :phone="$t('overview.dashboard.support-requests.header.phone')"
        :city="$t('overview.dashboard.support-requests.header.city')"
        header
      />
      <swiper :options="swiperOptions" ref="swiperInstance">
        <swiper-slide
          v-for="(slide, slideIndex) in peoplePerSlide"
          :key="slideIndex"
        >
          <TicketLine
            v-for="(people, peopleIndex) in slide"
            :key="`${slideIndex}-${peopleIndex}`"
            class="table-line"
            :fullname="`${people.name.first} ${people.name.last}`"
            :email="people.email"
            :time="people.registered.date"
            :phone="people.phone"
            :city="people.location.city"
          />
        </swiper-slide>
      </swiper>
    </section>
  </section>
</template>

<script>
import TicketLine from '@/components/TicketLine.vue'
import Spinner from  '@/components/Spinner.vue'

export default {
  name: 'SupportList',
  components: {
    TicketLine,
    Spinner
  },
  props: {
    randomPeople: {
      type: Array,
      required: true
    },
    loading: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      perSlide: 6,
      peoplePerSlide: [],
      swiperInstance: false,
      swiperOptions: {
        slidesPerView: 1,
        centeredSlides: true,
        allowTouchMove: false,
        spaceBetween: 15
      }
    }
  },
  watch: {
    randomPeople: function() {
      while(this.randomPeople.length) {
        this.peoplePerSlide.push(this.randomPeople.splice(0, this.perSlide));
      }
    }
  },
  async mounted () {
    this.swiperInstance = this.$refs.swiperInstance.$swiper
    this.$emit('supportlist:swiper', this.swiperInstance, this.perSlide)
  }
}
</script>

<style lang="scss" scoped>
.title {
  color: $color-font-dark-strong;
  margin-bottom: $space-lg;
}

.table-line {
  margin-bottom: $space-sm;
}
</style>

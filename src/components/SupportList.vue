<template>
  <section>
    <article v-if="loading">
      <Spinner/>
    </article>

    <section v-show="!loading">
      <div class="support-header">
        <h3 class="title font-bold font-lg">{{ $t('overview.dashboard.support-requests.title') }}</h3>
        <input
          v-model="filter"
          class="input"
          type="text"
          :placeholder="$t('overview.dashboard.support-requests.filter')"
          @input="$emit('supportlist:filter', filter)"
        />
      </div>

      <SupportListLine
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
          <SupportListLine
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
import SupportListLine from '@/components/SupportListLine.vue'
import Spinner from  '@/components/Spinner.vue'

export default {
  name: 'SupportList',
  components: {
    SupportListLine,
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
      filter: '',
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
      this.peoplePerSlide = []
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
}

.table-line {
  margin-bottom: $space-sm;
}

.input {
  text-align: right;
  width: 225px;
}

.support-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.support-header {
  margin-bottom: $space-lg;
}
</style>

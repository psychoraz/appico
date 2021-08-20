<template>
  <div class="page page--overview page--dashboard">
    <section class="card --transparent">
      <h1 class="title">{{ $t('overview.dashboard.title') }}</h1>
    </section>

    <SupportList
      class="support-list"
      :randomPeople="randomPeople"
      :loading="loadingRandomPeople"
      @supportlist:swiper="setSupportListSwiper"
    />
    <section class="support-footer" v-if="supportListSwiper">
      <SupportListInfo
        :swiperInstance="supportListSwiper"
        :perPage="perSlide"
        :total="howMany"
      />
      <SupportListPager
        :swiperInstance="supportListSwiper"
      />
    </section>
  </div>
</template>

<script>
import people from '@/infra/people.js'
import SupportList from '@/components/SupportList.vue'
import SupportListInfo from '@/components/SupportListInfo.vue'
import SupportListPager from '@/components/SupportListPager.vue'

export default {
  name: 'DashboardPage',
  components: {
    SupportList,
    SupportListInfo,
    SupportListPager
  },
  data() {
    return {
      perSlide: 0,
      howMany: 45,
      fields: [
        'name',
        'email',
        'phone',
        'location',
        'registered'
      ],
      randomPeople: [],
      loadingRandomPeople: false,
      supportListSwiper: false
    }
  },
  methods: {
    setSupportListSwiper(swiper, perSlide) {
      this.supportListSwiper = swiper
      this.perSlide = perSlide
    }
  },
  async mounted () {
    this.loadingRandomPeople = true
    this.randomPeople = await people.getRandomPeople(this.howMany, this.fields)
    console.log(this.randomPeople)
    this.loadingRandomPeople = false
  }
}
</script>

<style lang="scss" scoped>
.support-list {
  margin-bottom: $space-lg;
}

.support-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>

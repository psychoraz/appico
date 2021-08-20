<template>
  <div class="page page--overview page--dashboard">
    <section class="card --transparent">
      <h1 class="title">{{ $t('overview.dashboard.title') }}</h1>
    </section>

    <section class="card grid">
      <section class="general">
        <h3 class="title font-md font-bold">{{ $t('overview.dashboard.general-results.title')}}</h3>
      </section>
      <section class="ratings">
        <h3 class="title font-md font-bold">{{ $t('overview.dashboard.results-category.title')}}</h3>
      </section>
      <section class="terms">terms</section>
      <section class="support">
        <div class="support-header">
          <h3 class="title font-bold font-lg">{{ $t('overview.dashboard.support-requests.title') }}</h3>
          <input v-model="filter" class="input" type="text" :placeholder="$t('overview.dashboard.support-requests.filter')"/>
        </div>
        <SupportList
          class="support-list"
          :randomPeople="filteredPeople"
          :loading="loadingRandomPeople"
          @supportlist:swiper="setSupportListSwiper"
        />
      </section>
    </section>
    <section class="support-footer" v-if="supportListSwiper">
      <SupportListInfo
        :swiperInstance="supportListSwiper"
        :perPage="(filteredPeople.length < perSlide) ? filteredPeople.length : perSlide"
        :total="filteredPeople.length"
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
  computed: {
    filteredPeople() {
      return this.randomPeople.filter((people) =>
        (`${people.name.first} ${people.name.last}`.toLowerCase().includes(this.filter.toLowerCase())) ||
        (people.email.toLowerCase().includes(this.filter))
      )
    }
  },
  data() {
    return {
      filter: '',
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
    this.loadingRandomPeople = false
  }
}
</script>

<style lang="scss" scoped>
.title {
  color: $color-font-dark-weak
}

.content {
  margin-bottom: $space-lg;
}

.support-header,
.support-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.support-header {
  margin-bottom: $space-lg;
}

.grid {
  display: grid;
  grid-template-areas:  "general ratings terms"
                        "support support support";
  grid-template-columns: 2fr 2fr 1fr;
  grid-gap: 1px;
  border: 1px solid $border-color;
  background-color: $border-color;
  box-sizing: border-box;

  > section {
    background-color: $color-white;
    padding: $space-xl;
  }

  .general {
    grid-area: general;
  }

  .ratings {
    grid-area: ratings;
  }

  .terms {
    grid-area: terms;
  }

  .support {
    grid-area: support;
    overflow: auto;
  }

  .input {
    text-align: right;
    width: 225px;
  }
}
</style>

<template>
  <div class="page page--overview page--dashboard">
    <section class="main-title card --transparent">
      <h1 class="title">{{ $t('overview.dashboard.title') }}</h1>
      <div class="flex">
        <ProgressBar class="progress" :percent="65"/>
        <p v-html="$t('overview.dashboard.insertions', {insertions: insertions})"></p>
      </div>
    </section>

    <section class="card grid">
      <section class="general">
        <Summary
          i18n="overview.dashboard.general-results"
          :followers="9401"
          color="#0077FF"
        />
      </section>
      <section class="ratings">
        <Summary
          i18n="overview.dashboard.ratings-category"
          :followers="3900"
          color="#F0166D"
        />
      </section>
      <section class="terms">
        <Terms/>
      </section>
      <section class="support">
        <SupportList
          class="support-list"
          :randomPeople="filteredPeople"
          :loading="loadingRandomPeople"
          @supportlist:swiper="setSupportListSwiper"
          @supportlist:filter="setSupportListFilter"
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
import ProgressBar from '@/components/ProgressBar.vue'
import Summary from '@/components/Summary.vue'
import Terms from '@/components/Terms.vue'
import SupportList from '@/components/SupportList.vue'
import SupportListInfo from '@/components/SupportListInfo.vue'
import SupportListPager from '@/components/SupportListPager.vue'

export default {
  name: 'DashboardPage',
  components: {
    ProgressBar,
    Summary,
    Terms,
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
      insertions: 643,
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
    },
    setSupportListFilter(filter) {
      this.filter = filter
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
.support-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;

  @include is-mobile {
    flex-direction: column;
    width: 100%;
  }
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


  @include is-mobile {
    grid-template-areas:  "general"
                          "ratings"
                          "terms"
                          "support";
    grid-template-columns: 1fr;
    grid-gap: $space-md $space-sm;
    background: $background-color;
  }
  @include is-tablet {
    grid-template-areas:  "general terms"
                          "ratings terms"
                          "support support";
    grid-template-columns: 2fr 1fr;
  }
  @include is-laptop {
    grid-template-areas:  "general terms"
                          "ratings terms"
                          "support support";
    grid-template-columns: 2fr 1fr;
  }

  > section {
    background-color: $color-white;
    padding: $space-xl;

    @include is-mobile {
      padding: $space-sm;
    }
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
}

.main-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;

  @include is-mobile {
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
  }

  .title {
    @include is-mobile {
      margin-bottom: $space-md;
    }
  }

  /deep/ .font-bold {
    color: $color-font-dark-weak;
  }

  .flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: nowrap;

    @include is-tablet {
      align-items: flex-end;
      justify-content: center;
      flex-direction: column;
    }

    @include is-mobile {
      align-items: flex-end;
      justify-content: center;
      flex-direction: column;
      width: 100%;
    }

    .progress {
      margin-right: $space-md;

      @include is-tablet {
        margin-right: 0;
      }

      @include is-mobile {
        margin-right: 0;
      }
    }
  }
}
</style>

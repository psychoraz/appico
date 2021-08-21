<template>
  <section>
    <h3 class="text font-md font-bold">{{ $t(`${i18n}.title`) }}</h3>
    <section class="grid">
      <div class="grid__text">
        <countTo
          class="count-to font-xl font-bold"
          :endVal="followers"
          :duration="1500"
          separator="."
        />
        <span>{{ $t(`${i18n}.followers`) }}</span>
      </div>
      <ChartBar class="grid__bar" :color="color"/>
      <ChartPie class="grid__pie" :color="color"/>
    </section>
  </section>
</template>

<script>
import countTo from 'vue-count-to';
import ChartBar from '@/components/ChartBar.vue'
import ChartPie from '@/components/ChartPie.vue'

export default {
  name: 'Summary',
  components: {
    countTo,
    ChartBar,
    ChartPie
  },
  props: {
    i18n: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    },
    followers: {
      type: Number,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.text {
  color: $color-font-dark-weak;
  margin-bottom: $space-lg;
}

.count-to {
  color: $color-font-dark-strong
}

.grid {
  display: grid;
  grid-template-areas:  "text pie"
                        "bar pie";
  grid-template-columns: 2fr 1fr;

  @include is-mobile {
    grid-template-areas:  "text"
                          "bar"
                          "pie";
    grid-template-columns: 1fr;
  }

  &__text {
    grid-area: text;
    margin-bottom: $space-md;

    @include is-mobile {
      margin: auto;
      margin-bottom: $space-md;
    }
  }

  &__bar {
    grid-area: bar;
    margin-right: $space-md;

    @include is-mobile {
      margin: auto;
      margin-bottom: $space-md;
    }
  }

  &__pie {
    grid-area: pie;
    margin: auto;
  }
}
</style>

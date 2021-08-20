<template>
  <section>
    <h3 class="title font-md font-bold">{{ $t('overview.dashboard.ratings-category.title')}}</h3>
    <ChartBar :primary="false"/>
    <ChartPie :primary="false"/>
  </section>
</template>

<script>
import ChartBar from '@/components/ChartBar.vue'
import ChartPie from '@/components/ChartPie.vue'

export default {
  name: 'RatingsCategory',
  components: {
    ChartBar,
    ChartPie
  }
}
</script>

<style lang="scss" scoped>
.title {
  color: $color-font-dark-weak
}
</style>
<template>
  <section>
    <h3 class="title font-md font-bold">{{ $t('overview.dashboard.general-results.title')}}</h3>
    <GeneralResultsBar class="bar"/>
    <GeneralResultsPie :primary="true"/>
  </section>
</template>

<script>
import GeneralResultsBar from '@/components/GeneralResultsBar.vue'
import GeneralResultsPie from '@/components/GeneralResultsPie.vue'

export default {
  name: 'GeneralResults',
  components: {
    GeneralResultsBar,
    GeneralResultsPie
  }
}
</script>

<style lang="scss" scoped>
.title {
  color: $color-font-dark-weak
}
</style>
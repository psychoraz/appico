<template>
  <div class="page page--overview page--dashboard">
    <OverviewSide/>
    <section class="page__content">
      <section class="card --transparent">
        <h1 class="title">{{ $t('overview.dashboard.title') }}</h1>
      </section>
      <section class="card">
        <p class="text">{{ $t('dummy.text') }}</p>
      </section>
    </section>
  </div>
</template>

<script>
import OverviewSide from '@/components/nav/OverviewSide.vue'

export default {
  name: 'DashboardPage',
  components: {
    OverviewSide
  }
}
</script>

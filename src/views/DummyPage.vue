<template>
  <div class="page page--dummy">
    <OverviewSide/>
    <section class="page__content">
      <section class="card --transparent">
        <h1 class="title">{{ $t('dummy.title') }}</h1>
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
  name: 'DummyPage',
  components: {
    OverviewSide
  }
}
</script>

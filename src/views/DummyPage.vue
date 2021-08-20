<template>
  <div class="page page--dummy">
    <section class="page__content">
      <section class="card --transparent">
        <h1 class="title">{{ $t('dummy.title') }}</h1>
      </section>
      <section class="card --padding">
          <p class="text">{{ $t('dummy.text') }}</p>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  name: 'DummyPage'
}
</script>

<style lang="scss" scoped>
.--padding {
  padding: $space-xl;
}
</style>
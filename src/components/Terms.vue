<template>
  <article>
    <p
      v-for="(term, index) in terms"
      :key="index"
      class="term"
    >
      <span class="term__name">{{ term.name }}</span>
      <span class="term__value">{{ term.value }}</span>
    </p>
  </article>
</template>

<script>
export default {
  name: 'Terms',
  data() {
    return {
      terms: [
        { name: 'Term 1', value: 85.08 },
        { name: 'Term 2', value: 1.76 },
        { name: 'Term 3', value: 33.42 },
        { name: 'Term 4', value: 75.11 }
      ]
    }
  }
}
</script>

<style lang="scss">
.term {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  margin: $space-lg $space-md;

  &__name {
    color: $color-font-light-strong;
    font-size: $font-xs;
    text-transform: uppercase;
  }

  &__value {
    color: $color-font-dark-weak;
    font-size: $font-xs;
    font-weight: $font-bold;
  }
}
</style>
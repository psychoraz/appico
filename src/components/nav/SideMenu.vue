<template>
  <div class="nav nav__side">
    <router-link
        v-for="(route, index) in $route.meta.sideMenu"
        :key="index"
        class="nav__link"
        :class="{ '--active': $route.name === route.name}"
        :to="{ name: route.name }"
      >
        <i :class="route.icon"></i>
      </router-link>
  </div>
</template>

<script>
export default {
  name: 'SideMenu'
}
</script>

<style lang="scss" scoped>
.nav {

  &__link {
    position: relative;
    width: 100%;
    padding: $space-md;
    text-align: center;
    color: $color-font-light-weak;
    background: $foreground-color;

    &.--active {
      color: $color-primary;

      &:after {
        content: '';
        position: absolute;
        top: 0;
        left: calc(100% - #{$space-xs});
        width: $space-xs;
        height: 100%;
        background: $color-primary;
      }
    }
  }
}
</style>
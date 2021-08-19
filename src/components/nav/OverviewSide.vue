<template>
  <div class="nav nav__side">
    <router-link
        v-for="(route, index) in routes"
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
  name: 'OverviewSide',
  data () {
    return {
      routes: [
        { name: 'Dashboard', icon: 'icon-dashboard' },
        { name: 'Support', icon: 'icon-support' },
        { name: 'Files', icon: 'icon-files' },
        { name: 'Mail', icon: 'icon-mail' },
        { name: 'Settings', icon: 'icon-settings' }
      ]
    }
  }
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
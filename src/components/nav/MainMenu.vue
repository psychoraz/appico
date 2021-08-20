<template>
  <div class="nav nav__main">
    <section class="nav__logo">
      <Logo
        :src="require('@/assets/images/logo.svg')"
        :alt="$t('global.company')"
        href="https://appico.com/"
      />
    </section>
    <section class="nav__sections">
      <router-link
        v-for="(route, index) in routes"
        :key="index"
        class="nav__link"
        :class="{ '--active': $route.name.includes(route.name.substr(0, route.name.indexOf('-')))}"
        :to="{ name: route.name }"
      >
        {{ route.text }}
      </router-link>
      <div class="nav__active"></div>
    </section>
    <section class="nav__actions">
      <button class="button">{{ $t('menu.premium') }}</button>
    </section>
  </div>
</template>

<script>
import Logo from '@/components/Logo.vue'

export default {
  name: 'MainMenu',
  components: {
    Logo
  },
  data () {
    return {
      routes: [
        { name: 'Overview-Dashboard', text: this.$t('menu.section.overview') },
        { name: 'Campaigns-Dashboard', text: this.$t('menu.section.campaign') },
        { name: 'Analytics-Dashboard', text: this.$t('menu.section.analytics') }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.nav {

  &__logo {
    width: calc(#{$side-width} - #{$space-lg * 2});
    margin-right: 10%;
  }

  &__sections {
    display: flex;
    justify-content: space-around;
    margin-right: auto;
  }

  &__link {
    position: relative;
    width: 100%;
    margin: 0 $space-xl;
    text-align: center;
    color: $color-font-light-weak;

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }

    &.--active {
      color: $color-primary;

      &:after {
        content: '';
        position: absolute;
        top: calc(100% + #{$space-lg});
        left: 0;
        width: 100%;
        height: $space-xs;
        background: $color-primary;
      }
    }
  }
}
</style>
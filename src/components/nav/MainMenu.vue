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
    <section class="nav__menu">
      <Slide
        closeOnNavigation
        noOverlay
        disableOutsideClick
        :width="200"
      >
        <router-link
          v-for="(route, index) in routes"
          :key="index"
          class="nav__link"
          :class="{ '--active': $route.name.includes(route.name.substr(0, route.name.indexOf('-')))}"
          :to="{ name: route.name }"
        >
          {{ route.text }}
        </router-link>
      </Slide>
    </section>
    <section class="nav__actions">
      <button class="button">{{ $t('menu.premium') }}</button>
    </section>
  </div>
</template>

<script>
import Logo from '@/components/Logo.vue'
import { Slide } from 'vue-burger-menu'

export default {
  name: 'MainMenu',
  components: {
    Logo,
    Slide
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

    @include is-mobile {
      width: calc(30px - #{$space-sm * 2});
      margin-right: $space-md;
    }
  }

  &__sections {
    display: flex;
    justify-content: space-around;
    margin-right: auto;

    @include is-mobile {
      display: none;
    }
  }

  &__menu {
    display: none;
    margin-right: auto;

    /deep/ .bm-menu {
      background-color: $color-font-dark-weak;
      padding-top: 50px;
    }

    /deep/ .bm-burger-button {
      position: relative;
      top: 0;
      left: 0;
      width: 20px;
      height: 15px;
      padding: 0;

      .bm-burger-bars {
        background-color: $color-font-dark-weak;
        border-radius: $border-radius;
      }
    }

    @include is-mobile {
      display: block;
    }
  }

  &__link {
    position: relative;
    width: 100%;
    margin: 0 $space-xl;
    text-align: center;
    color: $color-font-light-weak;

    @include is-mobile {
      margin: 0;
    }

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

        @include is-mobile {
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
}
</style>
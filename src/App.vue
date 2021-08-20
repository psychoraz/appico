<template>
  <div id="app" class="app">
    <MainMenu/>
    <SideMenu/>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import MainMenu from '@/components/nav/MainMenu.vue'
import SideMenu from '@/components/nav/SideMenu.vue'

export default {
  name: 'App',
  components: {
    MainMenu,
    SideMenu
  }
}
</script>

<style lang="scss" scoped>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .25s ease;
}
</style>

<template>
  <div id="app">
    <v-header></v-header>
    <v-nav></v-nav>
    <keep-alive>
      <router-view v-if="!$route.meta.dontKeepAlive"></router-view>
    </keep-alive>
    <router-view v-if="$route.meta.dontKeepAlive"></router-view>
  </div>
</template>

<script>
import header from '@/components/ui/header/header.vue'
import nav from '@/components/ui/nav-tab/nav.vue'

export default {
  name: 'app',
  components: {
    'v-header': header,
    'v-nav': nav
  }
}
</script>

<style>

</style>

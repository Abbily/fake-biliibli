<template>
  <div id="app">
    <v-header></v-header>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import header from '@/components/ui/header/header.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    'v-header': header
  }
}
</script>

<style>

</style>

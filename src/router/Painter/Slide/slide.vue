<template>
  <div class="slide_container">
    <full-page-slide :data="items"></full-page-slide>
  </div>
</template>

<script>
import FullPageSlide from '@/components/ui/better-scroll/scroll.vue';
export default {
  components:{
    FullPageSlide
  },
  data(){
    return {
      items: [
        'https://i0.hdslb.com/bfs/vc/80b274225fc3e938638e8ed104ccff3e3f982d37.png',
        'https://i0.hdslb.com/bfs/vc/0b47e283cc19144c08c185c1435381a7c6e4be0e.jpg',
        'https://i0.hdslb.com/bfs/vc/547ea221f7a9ea32f71cbcef3bd6ef065e9fa5a5.jpg'
      ]
    }
  }
}
</script>
<style lang="stylus">
.slide_container{
}
</style>

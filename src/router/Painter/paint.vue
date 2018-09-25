<template>
  <div class="detail_container" v-if="show">
    <slide/>
    <RecommendPainter @hid="hid"/>
    <Recommendworks/>
  </div>
</template>
<script>
import slide from './Slide/slide.vue';
import RecommendPainter from './RecommendPainter/RecommendPainter.vue';
import Recommendworks from './Recommendworks/Recommendworks.vue';
export default {
  components:{
    slide,
    RecommendPainter,
    Recommendworks
  },
  data(){
    return {
      show: true
    }
  },
  methods: {
    hid(){
      this.show = !this.show;
    }
  }
}
</script>
<style>
.detail_container{
}
</style>

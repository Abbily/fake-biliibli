<template>
  <div class="detail_container">
    <slide/>
    <RecommendPainter/>
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

    }
  }
}
</script>
<style>
.detail_container{
}
</style>

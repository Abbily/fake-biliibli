<template>
  <div class="detail_container">
    <slide/>
    <painter/>
    <works/>
    <router-view></router-view>
  </div>
</template>
<script>
import slide from './Slide/slide.vue';
import painter from './RecommendPainter/RecommendPainter.vue';
import works from './Recommendworks/Recommendworks.vue';
export default {
  components:{
    slide,
    painter,
    works
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

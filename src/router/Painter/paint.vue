<template>
  <div class="paint-footer">
    <slide/>
    <painter/>
    <cTitle v-if="data">推荐作品</cTitle>
    <div class="illData">
      <works v-for="i in data" :illData="i" :key="i.item.doc_id" v-if="data"/>
    </div>
    <router-view/>
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
  created(){
    this.$axios.get('https://api.rozwel.club/api/bilibili/api/recommends?page='+this.page).then(res=>{
      this.data = res.data.data.items;
    })
  },
  data(){
    return {
      page: 1,
      data: '',
    }
  }
}
</script>
<style lang="stylus">
.paint-footer{
  width: 100%;
  position: absolute;
  top: 2.166666rem;
  .illData{
    padding: 10px;
  }
}
</style>

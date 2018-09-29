<template>
  <div class="paint-footer">
    <slide/>
    <painter/>
    <cTitle v-if="data">推荐作品</cTitle>
    <div class="illData" ref='illData'>
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
    this.getData();
    if(this.$route.path === "/paint"){
      window.addEventListener('scroll', this.getScrollTop);
    }
  },
  data(){
    return {
      page: 1,
      data: '',
      scrollTop: '',
      timer: '',
    }
  },
  methods: {
    getData(page=1){
      this.$axios.get('https://api.rozwel.club/api/bilibili/api/recommends?page='+page).then(res=>{
        this.data?this.data.push(...res.data.data.items):(this.data=res.data.data.items);
      })
    },
    getScrollTop(){
      this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
      console.log(this.$refs.illData.style);
      clearTimeout(this.timer);
      this.timer = setTimeout(()=>{
        if(this.scrollTop>9380 * this.page){
          this.getData(++this.page);
        }
      },200);
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

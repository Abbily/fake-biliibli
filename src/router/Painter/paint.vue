<template>
  <div class="paint-footer">
    <div v-if="show">
      <slide/>
      <painter/>
      <cTitle v-if="data">推荐作品</cTitle>
      <div class="illData" ref='illData'>
        <works v-for="i in data" :illData="i" :key="i.item.doc_id" v-if="data" @onChildChange="onChildChange"/>
      </div>
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
  watch:{
    '$route'(to){
      if(to.name==='drawer' || to.name==='detail'){
        this.show = false;
      } else {
        this.show = true;
      }
    }
  },
  created(){
    this.getData();
    if(this.$route.path === "/paint"){
      window.addEventListener('scroll', this.getScrollTop);
    }
    if(this.$route.path !== '/paint'){
      this.show = false;
    }
  },
  data(){
    return {
      page: 1,
      data: '',
      scrollTop: '',
      timer: '',
      show: true,
    }
  },
  methods: {
    onChildChange(){
      this.show = false;
    },
    getData(page=1){
      this.$axios.get('/api/recommends?page='+page).then(res=>{
        this.data?this.data.push(...res.data.items):(this.data=res.data.items);
      })
    },
    getScrollTop(){
      this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
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
  height: 100%;
  .illData{
    padding: 10px;
  }
}
</style>

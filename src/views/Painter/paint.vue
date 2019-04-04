<template>
  <div class="paint-footer">
    <Iscroll ref="Iscroll" :probeType="3">
      <slide/>
      <painter/>
      <cTitle v-if="data">推荐作品</cTitle>
      <div class="illData" ref='illData' v-if="data">
        <works v-for="i in data" :illData="i" :key="i.item.doc_id" @onChildChange="onChildChange"/>
      </div>
    </Iscroll>
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
  mounted(){
    this.getData();
    setTimeout(()=>{
      this.$refs['Iscroll'].initScroll();
      this.$refs['Iscroll'].remountSrcoll(this.scrollContent);
    },500)
  },
  data(){
    return {
      page: 1,
      data: null,
      scrollTop: '',
      timer: '',
    }
  },
  methods: {
    onChildChange(){
      this.show = false;
    },
    getData(page=1){
      this.$axios.get('https://api.rozwel.club/api/bilibili/api/recommends?page='+page).then(res=>{
        this.data ? this.data.push(...res.data.data.items) : (this.data=res.data.data.items);
        if(this.$refs['Iscroll'].myScroll) {
          setTimeout(() => {
            this.$refs['Iscroll'].update();
          })
        }
      });
    },
    scrollContent() {
      if(-this.$refs['Iscroll'].myScroll.y > 9380 * this.page){
        this.getData(++this.page);
      }
    },
  }
}
</script>
<style lang="scss">
.paint-footer{
  width: 100%;
  height: 100vh;
  #wrapper{
    padding-top: 2.166666rem;
    touch-action: none;
  }
  .illData{
    padding: 0.2rem;
    padding-bottom: 1rem;
  }
}
</style>

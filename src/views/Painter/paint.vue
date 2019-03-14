<template>
  <div class="paint-footer">
    <div id="wrapper">
      <slide/>
      <painter/>
      <cTitle v-if="data">推荐作品</cTitle>
      <div class="illData" ref='illData' v-if="data">
        <works v-for="i in data" :illData="i" :key="i.item.doc_id" @onChildChange="onChildChange"/>
      </div>
    </div>
    <router-view/>
  </div>
</template>
<script>
import slide from './Slide/slide.vue';
import painter from './RecommendPainter/RecommendPainter.vue';
import works from './Recommendworks/Recommendworks.vue';
import MoreScroll from 'iscroll/build/iscroll-probe';
export default {
  components:{
    slide,
    painter,
    works
  },
  mounted(){
    this.getData();
    // if(this.$route.path === "/paint"){
    //   window.addEventListener('scroll', scroll);
    // }
    setTimeout(()=>{
      this.initScroll();
    },600)
  },
  watch: {
    '$route'(to, from) {
      if(to.path === '/paint' && this.myScroll){
        this.myScroll.refresh();
      }
    }
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
        if(this.myScroll) {
          setTimeout(() => {
            this.myScroll.refresh();
          },300)
        }
      });
    },
    // getScrollTop(){
    //   this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
    //   clearTimeout(this.timer);
    //   this.timer = setTimeout(()=>{
    //     if(this.scrollTop>9380 * this.page){
    //       this.getData(++this.page);
    //     }
    //   },200);
    // },
    scrollContent() {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        if(-this.myScroll.y > 9380 * this.page){
          this.getData(++this.page);
        }
      },200);
    },
    initScroll() {   // 初始化iscroll
      let IScroll = MoreScroll;
      this.myScroll = new IScroll('.paint-footer', {
          disableMouse: false,
          scrollbars: false,
          probeType: 3, // 3的时候实时监听事件
      });
      document.querySelector(`.paint-footer`).addEventListener('touchmove', e=>{
        e.preventDefault();
      })
      if (this.myScroll) {
        this.myScroll.on('scroll', this.scrollContent);
      }
    }
  }
}
</script>
<style lang="stylus">
.paint-footer{
  width: 100%;
  height: 100vh;
  #wrapper{
    padding-top: 2.166666rem;
    touch-action: none;
  }
  .illData{
    padding: 10px;
  }
}
</style>

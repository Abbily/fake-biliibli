<template>
  <div class="painter-name">
    <p class="painter-author">推荐画师</p>
    <div class="author">
      <div v-for="item in data" class="painter">
        <a class="jumpUrl">
          <div class="imgBox">
            <img :src="item.head_url" @click="jumpDetail(item.uid)">
          </div>
          <div style="font-size:0.28rem;">{{item.name}}</div>
        </a>
      </div>
    </div>
    <transition name="fade">
      <drawer v-show="show"/>
    </transition>
  </div>
</template>
<script>
import drawer from "./drawer.vue"
export default {
  components: {
    drawer
  },
  data(){
    return {
      data: '',
      show: false,
    }
  },
  methods: {
    jumpDetail(url){
      console.log(url);
      this.show = !this.show;
//      this.$router.push("/paint/drawer");
    }
  },
  created(){
    this.$axios.get('https://api.rozwel.club/api/bilibili/api/drawer').then(res=>{
      this.data = res.data.data;
    })
  }
}
</script>
<style lang="stylus">
//.fade-enter-active, .fade-leave-active {
//  transition: all 2s;
//  transform: translateX(0px);
//}
//.fade-enter, .fade-leave-active {
//  transform: translateX(-375px);
//}
.painter-name{
  width: 100%;
  position: absolute;
  top: 4.6rem;
  .fade-enter-active, .fade-leave-active {
    transition: all 0.5s;
    transform: translate3d(0, 0, 0);
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    transform: translate3d(375px, 0, 0);
  }
  .painter-author{
    background: #fb6b55;
    padding: 0.133333rem 0 0.133333rem 0.133333rem;
    border-left: 0.133333rem solid #c0c46d;
  }
  .author{
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    .painter{
      width: 33.3%;
      .jumpUrl{
        display: flex;
        align-items: center;
        flex-flow: column nowrap;
        .imgBox{
          width: 1.066666rem;
          height: 1.066666rem;
          border-radius: 50%;
          border: 2px solid #fc6;
          margin: .266666rem 0;
          overflow: hidden;
          img{
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}
</style>

<template>
  <transition name="slide">
    <div class="work-detail">
      <div class="b_header">
        <div class="space">
          <img src="@/assets/images/left.png" @click="back"/>
        </div>
        <div>作品详情</div>
        <div class="space"></div>
      </div>
      <div class="illustration">
        <div class="drawer">
<!--          <img :src="detail.user.head_url"/>-->
        <img src="http://i1.hdslb.com/bfs/face/2347b8742216ced18978a5956952e8e02d74f434.jpg"/>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  data(){
    return {
      detail: '',
      comments: '',
      user: '',
    }
  },
  created(){
    this.$axios.get('https://api.rozwel.club/api/bilibili/api/illustration/detail?doc_id='+this.$route.params.docId).then(res=>{
      this.detail = res.data.data
      console.log(this.detail);
    })
    this.$axios.get('https://api.rozwel.club/api/bilibili/api/comments?cid='+this.$route.params.docId).then(res=>{
      this.comments = res.data
    })
    this.$axios.get('https://api.rozwel.club/api/bilibili/api/user?uid='+this.$route.params.uId).then(res=>{
      this.user = res.data
    })

  },
  methods: {
    back(){
      this.$router.go(-1);
    }
  }
}
</script>
<style lang="stylus">
.slide-enter-active, .slide-leave-active
  transition: all 0.3s
.slide-enter, .slide-leave-to
  transform: translate3d(100%, 0, 0)

.work-detail{
  position: absolute;
  background: #444;
  z-index: 24;
  width: 100%;
  top:-2.166666rem;
  overflow: hidden;
  height: 1000px;
  .b_header{
    position: relative;
    width: 100%;
    background: #444;
    height: 1.066666rem;
    box-shadow: 0 0.053333rem 0.053333rem #222;
    display: flex;
    align-items: center;
    .space{
      flex: 1;
      img{
        padding-left: 10px;
        width: 25px;
      }
    }
  }
}
</style>

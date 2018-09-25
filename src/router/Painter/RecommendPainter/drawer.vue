<template>
  <div class="drawer-Deatil">
    <div class="b_header">
      <div class="space">
        <img src="@/assets/images/left.png" @click="back"/>
      </div>
      <div>作品详情</div>
      <div class="space"></div>
    </div>
    <div class="drawer_container">
      <div class="drawer_bg">
        <img :src="data.user.face"/>
      </div>
      <div class="drawer_circle">
        <img :src="data.user.face"/>
      </div>
      <div class="userInfo">
        <span class="uName">{{data.user.name}}</span>
        <span class="grp">
          <span class="level">UL{{data.user.user_level}}</span>
          <span class="level">UP{{data.user.next_master_level
}}</span>
        </span>
        <span class="grp_feed"></span>
        <div class="focus_btn"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      data:''
    }
  },
  created(){
    this.$axios.get('https://api.rozwel.club/api/bilibili/api/user?uid=7905675').then(res=>{
      this.data = res.data.data;
      console.log(res.data.data);
    })
  },
  methods: {
    back(){
      history.back();
      this.$emit('back',true);
    }
  }
}
</script>
<style lang="stylus">
.drawer-Deatil{
  position: absolute;
  background: #444;
  top: -4.66rem;
  z-index: 24;
  width: 100%;
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
  .drawer_container{
    position: relative;
    height: 6.3rem;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    .drawer_bg{
      width: 100%;
      height: 0;
      padding-top: 8rem;
      position: absolute;
      top: 0;
      left: 0;
      overflow: hidden;
      img{
        position: absolute;
        top: -10px;
        left: 0;
        width: 100%;
        z-index: -1;
        filter: blur(15px);
      }
    }
    .drawer_circle{
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      border: .0533333rem solid #fc6;
      overflow: hidden;
      margin-top: -1rem;
    }
    .userInfo{
      width: 100%;
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
      filter: blur(0);
      transform-origin: 50% 100%;
      .uName{
        margin-top: 10px;
      }
      .grp{
        margin-top: .266666rem;
        .level{
          display: inline-block;
          margin: 0 .266666rem;
          border-radius: .053333rem;
          font-size: .32rem;
          border: 1px solid #a068f1;
          color: #a068f1;
          font-weight: 700;
          padding: .053333rem .08rem;
        }
      }
    }
  }
}
</style>

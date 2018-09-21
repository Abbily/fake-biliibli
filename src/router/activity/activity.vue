<template>
  <div class="activity-name">
    <div class="actcard" v-for="item in data">
      <div class="img_container">
        <img :src="item.cover"/>
        <div class="fin">{{item.desc}}</div>
      </div>
      <div class="act_intro">
        <div class="title">{{item.title}}</div>
        <div class="date">{{item.start_time | time1}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      data: '',
    }
  },
  filters: {
    time1(val){
      var date = new Date(val * 1000)
      var Y = date.getFullYear() + '年';
      var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '月';
      var D = date.getDate() + '日';
      return Y+M+D;
    }
  },
  created(){
    this.$axios.get('https://api.rozwel.club/api/bilibili/api/center').then((res)=>{
      this.data = res.data.data.items;
    })
  }
}
</script>
<style lang="stylus">
.activity-name{
  position: relative;
  top: 2.2rem;
  padding: 0 .266666rem .266666rem;
  .actcard{
    border-radius: .133333rem;
    background: #444;
    box-sizing: border-box;
    overflow: hidden;
    margin-bottom: .266666rem;
    .img_container{
      width: 100%;
      padding-top: 4.04rem;
      border-radius: .133333rem .133333rem 0 0;
      overflow: hidden;
      position: relative;
      img{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
      }
      .fin{
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        background: rgba(0,0,0,.3);
        padding: .133333rem .266666rem .133333rem 0;
        text-align: right;
      }
    }
    .act_intro{
      padding-left: .133333rem;
      box-sizing: border-box;
      .title{
        margin: .133333rem;
      }
      .date{
        font-size: .30rem;
        margin: .133333rem;
      }
    }
  }
}
</style>

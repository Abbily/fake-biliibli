<template>
  <div class="worker-name">
    <p class="workers">推荐作品</p>
    <div class="ill_panel">
      <div class="card" v-for="item in data">
        <div class="img_container"></div>
        <div class="ill_title">{{item.item.title}}</div>
<!--        <div class="ill_header" :style="{'backgroundImage':'url('+item.user.head_url+')'}"></div>-->
        <div class="ill_name">{{item.user.name}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default{
  data(){
    return {
      i: 1,
      data: '',
    }
  },
  created(){
    this.$axios.get('https://api.rozwel.club/api/bilibili/api/recommends?page='+this.i).then(res=>{
      this.data = res.data.data.items;
    })
  }
}
</script>
<style lang="stylus">
.worker-name{
  width: 100%;
  position: absolute;
  top: 9.5rem;
  padding-bottom: 0.266666rem;
  .workers{
    background: #fb6b55;
    padding: 0.133333rem 0 0.133333rem 0.133333rem;
    border-left: 0.133333rem solid #c0c46d;
  }
  .ill_panel{
    padding: 10px;
    .card{
      border-radius: .133333rem;
      background: #444;
      box-sizing: border-box;
      overflow: hidden;
      margin-bottom: .266666rem;
    }
  }
}
</style>

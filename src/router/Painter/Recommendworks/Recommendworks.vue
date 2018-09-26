<template>
  <div class="worker-name">
    <cTitle>推荐作品</cTitle>
    <div class="ill_panel">
      <div class="card" v-for="item in data" :key="item.item.doc_id" @click="jumpDetail(item)">
        <div class="ill_title">{{item.item.title}}</div>
        <div class="img_container">
          <div class="ill_name">{{item.user.name}}</div>
        </div>
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
      show: false,
    }
  },
  created(){
    this.$axios.get('https://api.rozwel.club/api/bilibili/api/recommends?page='+this.i).then(res=>{
      this.data = res.data.data.items;
    })
  },
  methods: {
    jumpDetail(data){
      this.$router.push({
        name: '/detail',
        params: {docId:data.item.doc_id,uId:data.user.uid}
      });
      this.show = !this.show;
    }
  }
}
</script>
<style lang="stylus">
.worker-name{
  width: 100%;
  position: absolute;
  top: 9.5rem;
  padding-bottom: 0.266666rem;
  .fade-enter-active, .fade-leave-active {
    transition: all 0.3s;
    transform: translate3d(0, 0, 0);
  }
  .fade-enter, .fade-leave-active {
    transform: translate3d(375px, 0, 0);
  }
  .ill_panel{
    padding: 10px;
    .card{
      border-radius: .133333rem;
      background: #444;
      box-sizing: border-box;
      overflow: hidden;
      margin-bottom: .266666rem;
      .img_container{
        display: flex;
        align-items: center;
        padding: .133333rem;
        .img_box{
          width: .6rem;
          height: .6rem;
          overflow: hidden;
          border-radius: 50%;
          margin-right: .133333rem;
          img{
            width: 100%;
          }
        }
      }
    }
  }
}
</style>

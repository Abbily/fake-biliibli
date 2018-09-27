<template>
  <div id="card" @click="jumpDetail(illData)" v-if="illData">
    <div class="ill_panel">
      <div class="img_container">
        <img :src="illData.item.pictures[0].img_src"/>
      </div>
      <div class="ill_title">{{illData.item.title}}</div>
      <div class="drawer_intro">
        <div class="drawer_box">
          <div class="img_box">
            <img :src="illData.user.head_url"/>
          </div>
          <div class="ill_name">{{illData.user.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default{
  props: {
    illData: {
      default: null,
      type: Object
    }
  },
  data(){
    return {
      i: 1,
      show: false,
    }
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
#card{
  border-radius: 0.133333rem;
  background: #444;
  box-sizing: border-box;
  overflow: hidden;
  margin-bottom: 0.266666rem;
  .ill_panel{
    .img_container{
      width: 100%;
      height: 8rem;
      border-radius: .133333rem .133333rem 0 0;
      overflow: hidden;
      img{
        width: 100%;
      }
    }
    .ill_title{
      padding: .133333rem 0 .133333rem .133333rem;
    }
    .drawer_intro{
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      padding: .133333rem;
      box-sizing: border-box;
      .drawer_box{
        width: 50%;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
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

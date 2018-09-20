<template>
  <div class="Rank-name">
    <div class="navBtn">
      <div v-for="item in List" :key="item.id" :class="{'cate-active':id===item.id,'cate': true}" @click="changeActive(item.id)">{{item.label}}</div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      List:[{label:'月榜',id:1},{label:'周榜',id:2},{label:'新人榜',id:3}],
      id:1,
    }
  },
  methods: {
    changeActive(id){
      this.id = id;
    }
  }
}
</script>
<style lang="stylus">
.Rank-name{
  width:100%;
  position: fixed;
  height: 1.6rem;
  padding: .266666rem 0;
  box-sizing: border-box;
  top: 2.2rem;
  .navBtn{
    display: flex;
    width: 4rem;
    height: 0.85rem;
    margin: 0 auto;
    border-radius: .533333rem;
    border: 2px solid #bb828b;
    background: #9357a9;
    box-sizing: border-box;
    overflow: hidden;
    .cate{
      width: 33.3%;
      text-align:center;
      line-height:0.85rem;
    }
    .cate-active{
      background: #bb828b;
    }
  }
}
</style>

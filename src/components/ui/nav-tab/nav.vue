<template>
  <div class="tab">
    <div class="nav-tab">
      <div v-for="item in List" :key="item.id" :class="{'tab-item-active':id===item.id,'tab-item': true}" @click="changeActive(item.id)">{{item.label}}</div>
    </div>
  </div>
</template>


<script>
export default {
  data(){
    return {
      List:[{label:'画友',id:1},{label:'排行榜',id:2},{label:'活动中心',id:3}],
      id:1
    }
  },
  methods: {
    changeActive(data){
      this.id = data;
    }
  }
}
</script>

<style lang="stylus">
.tab{
  .nav-tab{
    position: relative;
    height: 1.266666rem;
    display: flex;
    align-items: center;
    flex-flow: row nowrap;
    line-height: 1.066666rem;
    .tab-item{
      text-align: center;
      width: 33.3%;
    }
    .tab-item-active{
      border-bottom: .026666rem solid #fc6;
    }
  }
}

</style>

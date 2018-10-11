<template>
  <div class="tab">
    <div class="nav-tab">
      <div v-for="item in List" :key="item.id" :class="{'tab-item-active':id===item.id,'tab-item': true}" @click="changeActive(item)">{{item.label}}</div>
    </div>
  </div>
</template>


<script>
export default {
  data(){
    return {
      List:[
        {label:'画友',id:1,path:'/paint'},
        {label:'排行榜',id:2,path:'/rank'},
        {label:'活动中心',id:3,path:'/activity'}
      ],
      id:1
    }
  },
  created(){
    this.id = +localStorage.getItem("id");
  },
  methods: {
    changeActive(data){
      this.id = data.id;
      this.$router.push(data.path?data.path:'');
      localStorage.setItem("id",this.id);
    }
  }
}
</script>

<style lang="stylus">
.tab{
  height: 1.1rem;
  position: fixed;
  top: 1.066666rem;
  z-index: 22;
  width: 100%;
  .nav-tab{
    background: #333333;
    top: 1.066666rem;
    height: 1.1rem;
    display: flex;
    align-items: center;
    line-height: 0.899999rem;
    justify-content: center;
    width: 100%;
    .tab-item{
      flex: 1;
      text-align: center;
    }
    .tab-item-active{
      border-bottom: .026666rem solid #fc6;
    }
  }
}

</style>

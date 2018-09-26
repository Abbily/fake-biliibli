<template>
  <div id="card" @click="jumpDetail(illData)">
    <div class="ill_panel">
      <div class="ill_title">{{illData.item.title}}</div>
      <div class="ill_name">{{illData.user.name}}</div>
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
    padding: 10px;
  }
}
</style>

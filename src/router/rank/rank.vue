<template>
  <div class="rank_container">
    <navBtn @saveId="saveId"/>
    <rankList ref="rankList"/>
  </div>
</template>
<script>
import navBtn from './navBtn/navBtn.vue';
import rankList from './rankList/rankList.vue';
export default {
  components:{
    navBtn,
    rankList
  },
  data(){
    return {

    }
  },
  methods: {
    saveId(id){
      this.$refs.rankList.giveId(id);
    }
  }
}
</script>
<style>
.rank_container{
  position: relative;
  top: 2.2rem;
}
</style>

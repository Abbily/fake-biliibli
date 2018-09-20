<template>
  <div class="slide-pic">
  </div>
</template>

<script>
import slide from '@/components/ui/better-scroll/scroll.vue';
export default {
  components:{
    slide
  },
  created(){
    this.$axios.get('/api/bilibili/api/getHeader').then(res=>{
      console.log(res);
    })
  },
  data(){
    return {

    }
  }
}
</script>
<style lang="stylus">

</style>

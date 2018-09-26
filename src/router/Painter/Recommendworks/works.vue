<template>
  <div class="works-name">
    111111111
  </div>
</template>
<script>
export default {
  data(){
    return {
      data: '',
    }
  },
  created(){
    if(this.$route.params){
      this.$axios.get('https://api.rozwel.club/api/bilibili/api/illustration/detail?doc_id=7917211')
    }
  },
  methods: {

  }
}
</script>
<style>
.works-name{
  position: absolute;
  background: #444;
  top: -9.5rem;
  z-index: 24;
  width: 100%;
  overflow: hidden;
}
</style>

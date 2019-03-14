<template>
  <div class="painter-name">
    <cTitle>推荐画师</cTitle>
    <div class="author" v-if="data">
      <div v-for="item in data" class="painter" :key="item.uid">
        <a class="jumpUrl">
          <div class="imgBox" @click="jumpUrl(item)">
              <img :src="item.head_url">
          </div>
          <div style="font-size:0.28rem;">{{item.name}}</div>
        </a>
      </div>
    </div>
    <loading v-else/>
  </div>
</template>
<script>
export default {
  data(){
    return {
      data: '',
      show: false,
      is404: false
    }
  },
  created(){
    this.$axios.get('https://api.rozwel.club/api/bilibili/api/drawer').then(res=>{
      this.data = res.data.data;
    })
  },
  methods: {
    jumpUrl(data){
      this.$router.push(`/drawer/${data.uid}`);
    }
  }
}
</script>
<style lang="stylus">
.painter-name{
  width: 100%;
  position: relative;
  top: 0.1rem;
  .author{
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    padding-bottom: .222222rem;
    .painter{
      width: 33.3%;
      .jumpUrl{
        display: flex;
        align-items: center;
        flex-flow: column nowrap;
        .imgBox{
          width: 1.066666rem;
          height: 1.066666rem;
          border-radius: 50%;
          border: 2px solid #fc6;
          margin: .266666rem 0;
          overflow: hidden;
          img{
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}
</style>

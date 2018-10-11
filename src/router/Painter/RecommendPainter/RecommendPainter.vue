<template>
  <div class="painter-name">
    <cTitle>推荐画师</cTitle>
    <div class="author" v-if="data && is404">
      <div v-for="item in data" class="painter" :key="item.uid">
        <a class="jumpUrl">
          <div class="imgBox">
            <router-link :to="`/paint/drawer/${item.uid}`">
              <img :src="item.head_url">
            </router-link>
          </div>
          <div style="font-size:0.28rem;">{{item.name}}</div>
        </a>
      </div>
    </div>
    <loading v-else :is404="is404"/>
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
    this.$axios.get('/api/drawer').then(res=>{
      this.data = res.data.data;
      setTimeout(()=>{
        this.is404 = true;
      },0);
    })
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

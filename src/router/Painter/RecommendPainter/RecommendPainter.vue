<template>
  <div class="painter-name">
    <p class="painter-author">推荐画师</p>
    <div class="author">
      <div v-for="item in data" class="painter">
        <a class="jumpUrl">
          <div class="imgBox">
            <img :src="item.head_url">
          </div>
          <div style="font-size:0.28rem;">{{item.name}}</div>
        </a>
      </div>
    </div>
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
    this.$axios.get('https://api.rozwel.club/api/bilibili/api/drawer').then(res=>{
      this.data = res.data.data;
    })
  }
}
</script>
<style lang="stylus">
.painter-name{
  width: 100%;
  position: absolute;
  top: 4.6rem;
  .painter-author{
    background: #fb6b55;
    padding: 0.133333rem 0 0.133333rem 0.133333rem;
    border-left: 0.133333rem solid #c0c46d;
  }
  .author{
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
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
    .painter{
      width: 33.3%;
      .jumpUrl{
        display:block;
        display: flex;
        align-items: center;
        flex-flow: column nowrap;
      }
    }
  }
}
</style>

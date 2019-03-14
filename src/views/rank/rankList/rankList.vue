<template>
  <div class="Rank-list" ref="RankList">
    <div class="rank">
      <div id="Rank_container">
        <div class="card" v-for='item in data' :key="item.item.doc_id" @click="jumpDeatil(item)">
          <div class="img_container" :style="{backgroundImage:'url('+item.item.pictures[0].img_src+')'}">
          </div>
          <p class="ill_name">{{item.item.title}}</p>
          <div class="drawer_box">
            <div class="img_box">
              <img :src="item.user.head_url"/>
            </div>
            <div>{{item.user.name}}</div>
          </div>
        </div>
        <div v-if="data" style="height: 3.6rem"></div>
      </div>
    </div>
  </div>
</template>
<script>
import MoreScroll from 'iscroll/build/iscroll-probe';
export default {
  data(){
    return {
      data: '',
    }
  },
  created(){
    this.$axios.get('https://api.rozwel.club/api/bilibili/api/rank').then(res=>{
      this.month = res.data.month.data.items;
      this.week = res.data.week.data.items;
      this.day = res.data.day.data.items;
      this.data = this.month;
      this.$nextTick(()=>{
        let len = this.data.length * 389
        this.$refs.RankList.style.height = len + 'px';
      })
      setTimeout(() => {
        this.initScroll();
      })
    })
  },
  methods:{
    giveId(id){
      if(id===1){
        this.data = this.month;
      } else if(id===2){
        this.data = this.week;
      } else if(id===3){
        this.data = this.day;
      }
    },
    jumpDeatil(data){
      this.$router.push({
        name: 'detail',
        params: {
          docId:data.item.doc_id,
          uId:data.user.uid
        }
      });
    },
    initScroll() {   // 初始化iscroll
      let IScroll = MoreScroll;
      this.myScroll = new IScroll('.rank', {
          disableMouse: false,
          scrollbars: false,
          // probeType: 3, // 3的时候实时监听事件
      });
      document.querySelector(`.rank`).addEventListener('touchmove', e=>{
        e.preventDefault();
      })
    },
  }
}
</script>
<style lang="stylus">
.Rank-list{
  position: absolute;
  top: 1.2rem;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  .rank{
    padding: 0 .266666rem .266666rem;
    box-sizing: border-box;
    height: 100vh;
    .card{
      border-radius: .133333rem;
      background: #444;
      box-sizing: border-box;
      overflow: hidden;
      margin-bottom: .266666rem;
      .ill_name{
        padding: .133333rem 0 .133333rem .133333rem;
      }
      .img_container{
        width: 100%;
        height: 6.2rem;
        border-radius: .133333rem .133333rem 0 0;
        overflow: hidden;
        background-size: cover!important;
        overflow: hidden;
      }
      .drawer_box{
        width: 50%;
        display: flex;
        align-items: center;
        padding: .133333rem;
        .img_box{
          width: .6rem;
          height: .6rem;
          overflow: hidden;
          border-radius: 50%;
          margin-right: .133333rem;

          img{
            width: 100%;
          }
        }
      }
    }
  }
}
</style>

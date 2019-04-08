<template>
  <transition name="slide">
    <div class="drawer-container">
      <cHeader :title="title" :needBack="true" :search="false"></cHeader>
      <div class="drawer-Deatil">
        <Iscroll ref="Iscroll" :probeType="3">
          <div class="drawer_container">
            <div class="drawer_bg">
              <img :src="data.user.face"/>
            </div>
            <div class="drawer_circle">
              <img :src="data.user.face"/>
            </div>
            <div class="userInfo">
              <span class="uName">{{data.user.name}}</span>
              <span class="grp">
                <span class="level">UL{{data.user.user_level}}</span>
                <span class="level">UP{{data.user.next_master_level}}</span>
              </span>
              <span class="grp_feed">
                <span class="feed right">关注:</span>
                <span class="feed left">粉丝:{{data.feed.fans_count}}</span>
              </span>
              <div class="focus_btn">关注</div>
            </div>
          </div>
          <div class="battle-name">
            <cTitle>直播间: 战斗之夜</cTitle>
            <div class="room">
              <a :href="data.room.room_link">
                <div class="img_container"><img :src="data.room.cover"></div>
              </a>
            </div>
          </div>
          <div class="picture">
            <cTitle>相簿</cTitle>
            <div class="illustration">
              <div class="pic_container" v-for="item in pic" :key="item.doc_id"
              @click="jumpDetail(item.doc_id)">
                <img :src="item.pictures[0].img_src"/>
              </div>
            </div>
            <div style="height: 1.2rem"/>
          </div>
          <loading v-if="!pic"/>
        </Iscroll>
        
        <div ref="d_fix" v-if="show" class="drawer_container_fixed">
          <div class="drawer_circle">
            <img :src="data.user.face" alt="">
          </div>
          <div class="userinfo">
            <span class="uname">{{data.user.name}}</span>
            <span class="grp">
              <span class="level">UL {{data.user.user_level}}</span>
              <span class="level">UP {{data.user.master_level}}</span>
            </span>
          </div>
          <div class="focus_btn">关注</div>
        </div>
        <router-view/>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'drawer',
  data(){
    return {
      data: {
        user: {
          face: '',
        },
        feed: {
          fans_count: '',
        },
        room: {
          room_link:'',
        }
      },
      pic: '',
      show: true,
      scrollTop: '',
      title: '作品详情',
      timer: '',
      isShow: true,
    }
  },
  mounted(){
    this.$axios.get('https://api.rozwel.club/api/bilibili/api/user?uid='+this.$route.params.id).then(res=>{
      this.data = res.data.data;
    })
    this.$axios.get('https://api.rozwel.club/api/bilibili/api/drawerillustration?uid='+this.$route.params.id).then(res=>{
      this.pic = res.data.data.items;
      setTimeout(() => {
        this.$refs['Iscroll'].initScroll();
        this.$refs['Iscroll'].remountSrcoll(this.scrollContent(100));
      },600)
    })
  },
  methods: {
    back(){
      this.$router.go(-1);
    },
    jumpDetail(id){
      this.$router.push({
        name: 'drawerDetail',
        params: {
          uid: id
        }
      })
    },
    scrollContent(wait) {
      let fix = this.$refs.d_fix;
      let timeout;
      return ()=>{
        if(timeout) clearTimeout(timeout);
        timeout = setTimeout(() => {
          if(-this.$refs['Iscroll'].myScroll.y > 168) {
            fix.style.opacity = 1;
          }else if(this.$refs['Iscroll'].myScroll.y<168 && fix){
            fix.style.opacity = 0;
          }
        },wait)
      }
    },
  }
}
</script>
<style lang="scss">
.slide-enter-active, .slide-leave-active{
  transition: all 0.2s
}
.slide-enter, .slide-leave-to{
  transform: translate3d(100%, 0, 0)
}
.drawer-container{
    background: #222;
    position: absolute;
    z-index: 24;
    width: 100%;
  .drawer-Deatil{
    height: 100vh;
    overflow: hidden;
    #wrapper{
      touch-action: none;
    }
    .drawer_container_fixed{
      position: fixed;
      top: 1.066666rem;
      left: 0;
      height: 1.8rem;
      width: 100vw;
      background: #333;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: flex-start;
      transition: all .3s ease;
      opacity: 0;
      z-index: 26;
      .drawer_circle{
        width: 1.066666rem;
        height: 1.066666rem;
        border-radius: 50%;
        border: .053333rem solid #fc6;
        overflow: hidden;
        margin: 0 auto;
        img{
          width: 100%;
        }
      }
      .userinfo{
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        .uname{
          margin-top: .266666rem;
        }
        .grp{
          margin-top: .266666rem;
          .level{
            margin: 0 .266666rem;
            border-radius: .053333rem;
            font-size: .24rem;
            border: 1px solid #a068f1;
            color: #a068f1;
            font-weight: 700;
            padding: .053333rem .08rem;
          }
        }
      }
      .focus_btn{
        box-sizing: border-box;
        margin: 0 auto;
        width: 2rem;
        height: .853333rem;
        line-height: .853333rem;
        text-align: center;
        font-size: .373333;
        color: #fff;
        background-color: #23ade6;
        border-radius: .106666rem;
        cursor: pointer;
      }
    }
    .drawer_container{
      height: 6.3rem;
      padding-top: 1.066666rem;
      margin-top: 1.066666rem;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      align-items: center;
      justify-content: center;
      .drawer_bg{
        width: 100vw;
        overflow: hidden;
        img{
          position: absolute;
          margin-top: -1.5rem;
          left: 0;
          width: 100%;
          z-index: -1;
          filter: blur(0.3rem);
        }
      }
      .drawer_circle{
        width: 2.8rem;
        height: 2.8rem;
        border-radius: 50%;
        border: .0533333rem solid #fc6;
        overflow: hidden;
        img{
          width: 100%;
        }
      }
      .userInfo{
        width: 100%;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        filter: blur(0);
        transform-origin: 50% 100%;
        .uName{
          margin-top: 10px;
        }
        .grp{
          margin-top: .166666rem;
          .level{
            display: inline-block;
            margin: 0 .266666rem;
            border-radius: .053333rem;
            font-size: .24rem;
            border: 1px solid #a068f1;
            color: #a068f1;
            font-weight: 700;
            padding: .053333rem .08rem;
          }
        }
        .grp_feed{
          margin-top: .166666rem;
          text-align: center;
          width: 100%;
          .left{
            text-align: left;
          }
          .right{
            text-align:right;
          }
          .feed{
            margin: 0 .266666rem;
            display: inline-block;
            width: 2.66666rem;
            white-space: nowrap;
          }
        }
        .focus_btn{
          box-sizing: border-box;
          margin: 0 auto;
          width: 2rem;
          height: .653333rem;
          line-height: .653333rem;
          text-align: center;
          font-size: .373333rem;
          color: #fff;
          background-color: #23ade6;
          border-radius: .106666rem;
          cursor: pointer;
          margin-top: .173333rem;
          font-size: .32rem;
        }
      }
    }
    .battle-name{
      .room{
        width: 5.28rem;
        height: 3.306666rem;
        border-radius: .133333rem;
        margin: .266666rem auto;
        overflow: hidden;
        a{
          text-decoration: none;
          color: #fff;
          .img_container{
            img{
              width: 100%;
            }
          }
        }
      }
    }
    .picture{
      .illustration{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        .pic_container{
          height: 2.5rem;
          border-radius: .133333rem;
          overflow: hidden;
          margin: .12rem;
          width: 30%;
          img{
            width: 100%;
          }
        }
      }
    }
  }
}

</style>

<template>
  <transition name="slide">
    <div class="drawer-Deatil" v-if="data && pic">
      <cHeader :title="title" :needBack="true" :search="false"></cHeader>
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
      <div class="picture" v-show="isShow">
        <cTitle>相簿</cTitle>
        <div class="illustration" v-if="is404">
          <div class="pic_container" v-for="item in pic" :key="item.doc_id"
           @click="jumpDetail(item.doc_id)">
            <img :src="item.pictures[0].img_src"/>
          </div>
        </div>
        <loading :is404="is404"/>
      </div>
      <router-view/>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'drawer',
  data(){
    return {
      data:'',
      pic: '',
      show: true,
      scrollTop: '',
      title: '作品详情',
      timer: '',
      is404: false,
      isShow: true,
    }
  },
  watch: {
  	'$route'(to, from) {
  		if(to.name === 'drawerDetail'){
  			this.isShow = false;
  		} else {
  			this.isShow = true;
  		}
  	}
  },
  created(){
    this.$axios.get('https://api.rozwel.club/api/bilibili/api/user?uid='+this.$route.params.id).then(res=>{
      this.data = res.data.data;
    })
    this.$axios.get('https://api.rozwel.club/api/bilibili/api/drawerillustration?uid='+this.$route.params.id).then(res=>{
      this.pic = res.data.data.items;
      setTimeout(()=>{
        this.is404 = true;
      },1500)
    })
    if(this.$route.name === "drawer"){
      window.addEventListener('scroll', this.getScrollTop);
    }
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
    getScrollTop(){
      this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      let fix = this.$refs.d_fix;
      clearTimeout(this.timer);
      this.timer = setTimeout(()=>{
        if(this.scrollTop>168 && fix){
          fix.style.opacity = 1;
        }else if(this.scrollTop<168 && fix){
          fix.style.opacity = 0;
        }
      },200);
    }
  }
}
</script>
<style lang="stylus">
.slide-enter-active, .slide-leave-active
  transition: all 0.2s
.slide-enter, .slide-leave-to
  transform: translate3d(100%, 0, 0)

.drawer-Deatil{
  position: absolute;
  background: #222;
  z-index: 24;
  width: 100%;
  .drawer_container_fixed{
    position: fixed;
    top: 1.066666rem;
    left: 0;
    height: 1.8rem;
    width: 100%;
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
    overflow: hidden;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    .drawer_bg{
      width: 100%;
      height: 0;
      padding-top: 8rem;
      position: absolute;
      top: 0;
      left: 0;
      overflow: hidden;
      img{
        position: absolute;
        top: -10px;
        left: 0;
        width: 100%;
        z-index: -1;
        filter: blur(15px);
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
      height: 18rem;
      .pic_container{
        height: 2.5rem;
        float: left;
        border-radius: .133333rem;
        overflow: hidden;
        margin: 6px;
        width: 30%;
        img{
          width: 100%;
        }
      }
    }
  }
}
</style>

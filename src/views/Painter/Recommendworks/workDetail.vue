<template>
  <transition name="fade">
    <Iscroll ref="Iscroll" :container="`.work_container`">
      <div class="work-detail">
        <cHeader :title="title" :needBack="true" :search="false"></cHeader>
        <div class="work_container">
          <div id="wrapper_container">
              <div class="illustration" v-if="user && detail">
                <div class="drawer">
                  <div class="img_container">
                    <img :src="user.user.face"/>
                  </div>
                  <div class="drawer_name">{{user.user.name}}</div>
                  <div class="drawer_level">UP{{user.user.master_level}}</div>
                </div>
                <div class="main">
                  <div class="title">{{detail.item.title}}</div>
                  <div class="desc">{{detail.item.description}}</div>
                  <div class="tags">
                    <span class="tag" v-for="(item, index) in detail.item.tags" :key="index">
                      <a>{{item.tag}}</a>
                    </span>
                  </div>
                  <div id="ILC">
                    <div v-if="detail.item.pictures">
                      <img v-for="(i, index) in detail.item.pictures" :key=index :src="i.img_src"/>
                    </div>
                    <loading v-else/>
                    <cTitle>热门评论</cTitle>
                    <div class="noreply">
                      <div v-for="item in comments.hots" :key="item.rpid">
                        <div class="comment_box" v-if="comments.hots">
                          <div class="img_container">
                            <img :src="item.member.avatar"/>
                          </div>
                          <div class="content">
                            <div class="user_box">
                              <div class="uname">{{item.member.uname}}</div>
                              <div class="ulevel">L{{item.member.level_info.current_level}}</div>
                            </div>
                            <div class="comment">{{item.content.message}}</div>
                          </div>
                        </div>
                      </div>
                      <div v-if="!comments.hots" class="noreply1">暂无热门评论</div>
                    </div>
                    <cTitle>评论</cTitle>
                    <div class="comments">
                      <div v-if="comments">
                        <div class="comment_box" v-for="item in comments.replies" :key="item.rpid">
                          <div class="img_container">
                            <img :src="item.member.avatar"/>
                          </div>
                          <div class="content">
                            <div class="user_box">
                              <div class="uname">{{item.member.uname}}</div>
                              <div class="ulevel">L{{item.member.level_info.current_level}}</div>
                            </div>
                            <div class="comment">{{item.content.message}}</div>
                            <div class="replies">
                              <div v-if="comments.hots">
                                <div class="comment_box" v-for="item in item.replies" :key="item.rpid">
                                  <div class="img_container">
                                    <img :src="item.member.avatar"/>
                                  </div>
                                  <div class="content">
                                    <div class="user_box">
                                      <div class="uname">{{item.member.uname}}</div>
                                      <div class="ulevel">L{{item.member.level_info.current_level}}</div>
                                    </div>
                                    <div class="comment">{{item.content.message}}</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div v-if="!comments.replies" class="noreply1">暂无评论</div>
                      </div>
                      <loading v-else/>
                      <div v-if="comments" style="height: 0.6rem"></div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </Iscroll>
  </transition>
</template>
<script>
export default {
  data(){
    return {
      detail: '',
      comments: '',
      user: '',
      replies: '',
      title: '作品详情',
      is404: false
    }
  },
  mounted(){
    this.getData();
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    getData() {
      const user = new Promise((resolve) => {
        let uId = this.$route.params.uId;
    	  this.$axios.get('https://api.rozwel.club/api/bilibili/api/user?uid='+uId ).then((res)=>{
          this.user = res.data.data;
          resolve(this.user);
        })
      })
      const detail = new Promise((resolve) => {
        let docId = this.$route.params.docId;
    	  this.$axios.get('https://api.rozwel.club/api/bilibili/api/illustration/detail?doc_id='+docId ).then((res)=>{
          this.detail = res.data.data;
          resolve(this.detail);
        })
      })
      const comments = new Promise((resolve) => {
        this.$axios.get(`https://api.rozwel.club/api/bilibili/api/comments?uid=${this.$route.params.docId}`).then((res)=>{
          this.comments = res.data.data;
          resolve(this.comments);
        })
      })
      Promise.all([user, detail, comments]).then(() => {
        setTimeout(() => {
          this.$refs['Iscroll'].initScroll();
        })
      })
    },
  }
}
</script>
<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active{
  transition: all 0.2s
}
.fade-enter, .fade-leave-to{
  transform: translate3d(100%, 0, 0)
} 
.work-detail{
  position: absolute;
  background: #222;
  z-index: 27;
  width: 100vw;
  top: 0;
  .work_container{
    height: 100vh;
    #wrapper_container{
      touch-action: none;
    }
  }
  .illustration{
    padding: .133333rem;
    box-sizing: border-box;
    position: relative;
    top: 1.066666rem;
    background: #222;
    .drawer{
      display: flex;
      align-items: center;
      .img_container{
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        border: .053333rem solid #fc6;
        overflow: hidden;
        img{
          width: 100%;
        }
      }
      .drawer_name{
        margin-left: .2rem;
      }
      .drawer_level{
        margin-left: .133333rem;
        padding: .04rem;
        border-radius: .053333rem;
        font-size: .2rem;
        border: .026666rem solid #5896de;
        color: #5896de;
        font-weight: 700;
      }
    }
    .main{
      .title{
        font-weight: 600;
        padding: .133333rem;
      }
      .desc{
        font-size: .2rem;
        padding: .1rem;
        color: #888;
        line-height: .4rem;
      }
      .tags{
        width:80%;
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        .tag{
          padding: .073333rem .166666rem .023333rem;
          margin: .133333rem;
          border-radius: .386666rem;
          border: .026666rem solid #444;
          box-sizing: border-box;
          line-height: .333333rem;
          background: #444;
          color: #eee;
        }
      }
      #ILC{
        width: 100%;
        overflow:hidden;
        img{
          width: 100%;
          display: inline-block;
          margin-bottom: .166666rem;
        }
      }
      .noreply1{
        font-size: .3rem;
        margin: .133333rem 0;
        color: #eee;
        text-align: center;
      }
      .noreply,.comments,.replies{
        font-size: .3rem;
        margin: .133333rem 0;
        color: #eee;
        background: #222;
        .comment_box{
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          margin: .166666rem 0;
          word-wrap: break-word;
          .img_container{
            min-width: 1rem;
            min-height: 1rem;
            max-width: 1rem;
            max-height: 1rem;
            border-radius: 50%;
            border: .033333rem solid #fc6;
            overflow: hidden;
            img{
              width: 100%;
            }
          }
          .content{
            display: flex;
            flex-flow: column nowrap;
            justify-content: flex-start;
            margin-left: .266666rem;
            .uname{
              display: inline-block;
            }
            .ulevel{
              display: inline-block;
              color: #9c7dd8;
              margin-left: .133333rem;
              font-size: .24rem;
              font-weight: 700;
            }
            .comment{
              font-size: .26rem;
              color: #ddd;
              margin-top: .133333rem;
              line-height: .4rem;
            }
          }
        }
      }
    }
  }
}
</style>

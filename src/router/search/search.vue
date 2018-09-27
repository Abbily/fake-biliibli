<template>
  <transition name="slide">
    <div id="search">
      <div class="b_header">
        <div class="space">
          <img src="@/assets/images/left.png" @click="back"/>
        </div>
        <div>搜索</div>
        <div class="space"></div>
      </div>
      <div class="search-input">
        <img src="@/assets/images/glass.png"/>
        <div class="input-container">
          <input type="text" class="input-area"/>
        </div>
      </div>
      <div class="msg">历史搜索记录</div>
    </div>
  </transition>
</template>
<script>
export default {
  methods: {
    back(){
      this.$router.go(-1);
    }
  }
}
</script>
<style lang="stylus">
.slide-enter-active, .slide-leave-active
  transition: all 0.3s
.slide-enter, .slide-leave-to
  transform: translate3d(100%, 0, 0)
#search{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #222;
  z-index: 24;
  width: 100%;
  overflow: hidden;
  .b_header{
    position: relative;
    width: 100%;
    background: #444;
    height: 1.066666rem;
    box-shadow: 0 0.053333rem 0.053333rem #222;
    display: flex;
    align-items: center;
    .space{
      flex: 1;
      img{
        padding-left: 10px;
        width: 25px;
      }
    }
  }
  .search-input{
    margin: 0 .266667rem;
    box-sizing: border-box;
    margin-top: .4rem;
    margin-bottom: .4rem;
    background: #666;
    height: .6rem;
    border-radius: .4rem;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    img{
      width: 0.5rem;
      height: 0.5rem;
      margin-left: 0.15rem;
    }
    .input-container{
      flex:1;
      .input-area{
        width: 88%;
        margin-left: 10px;
        color: #fff;
        background: #666;
        border: none;
      }
    }
  }
  .msg{
    padding-left: .266667rem;
  }
}
</style>

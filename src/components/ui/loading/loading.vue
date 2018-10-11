<template>
  <div id="loading">
    <img v-if="!is404" src="~@/assets/images/img_loading.png" width="64" alt="">
  </div>
</template>

<script>
export default {
  props: {
    is404: {
      type: Boolean,
      default: false
    }
  },
}
</script>

<style lang="stylus" scoped>
#loading
  position: relative
  top: 0
  left: 0
  right: 0
  bottom: 0
  display: flex
  justify-content: center
  align-items: center
  padding: .2rem 0
  z-index: 20
  .btn
    width: 3.733333rem
    height: 1.066666rem
    border-radius: 0.133333rem
    border: 2px solid #dd705c
    color: #dd705c
    background: #674b7c
    text-align: center
    line-height: 1.066666rem
    font-weight: bold
    margin: 0.266666rem auto 0
</style>

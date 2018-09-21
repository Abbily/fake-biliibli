<template>
  <div class="full-page-slide-wrapper">
    <slide ref="slide" :autoPlay="isAutoPlay" :loop="isLoop">
      <div v-for="(item, index) in items">
        <div class="full-page-img-wrapper" :style="getStyle(index)" @click="jumpUrl(item)">
<!--
          <div v-if="index === items.length -1" class="button-wrapper" @click="handleClick()">
          </div>
-->
        </div>
      </div>
    </slide>
  </div>
</template>

<script>
  import Slide from './slide.vue'
  const COMPONENT_NAME = 'pull-page-slide'

  export default {
    name: COMPONENT_NAME,
    props: {
      data: {
        type: Array,
        default: function () {
          return []
        }
      }
    },
    data() {
      return {
        items: this.data,
        isAutoPlay: true,
        isLoop: true,
      }
    },
    components: {
      Slide
    },
    methods: {
      handleClick() {
        this.$emit('finish')
      },
      getStyle(index) {
        return `background-image:url(${this.items[index].img_url})`
      },
      jumpUrl(item){
        window.location.href=item.b_url;
      }
    }
  }
</script>

<style lang="stylus">

  .full-page-slide-wrapper
    position: absolute
    z-index: 20
    left: 0
    top: 2.2rem;
    width: 100%
    height: 2.2rem
    overflow: hidden
    .slide
      height: 1.9rem
      .slide-group
        height: 100%
        .slide-item
          height: 100%
          .full-page-img-wrapper
            position: relative
            height: 100%
            background-size: cover
            transform: translateZ(0)
            .button-wrapper
              position: fixed
              bottom: 85px
              display: block
              width: 100%
              overflow: hidden
              .button
                display: inline-block
                width: 130px
                padding: 15px 0
                border: 4px solid rgba(255, 255, 255, 0.7)
                border-radius: 4px
                color: rgba(255, 255, 255, 0.7)
                font-size: $fontsize-large-xx

      .sub-slide
        height: 300px
        min-height: 1px
        position: relative
        .slide-group
          position: relative
          overflow: hidden
          white-space: nowrap
          .slide-item
            float: left
            box-sizing: border-box
            overflow: hidden
            text-align: center
            a
              display: block
              width: 100%
              overflow: hidden
              text-decoration: none
            img
              display: block
              width: 100%
</style>

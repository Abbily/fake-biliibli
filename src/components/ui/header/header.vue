<template>
  <div class="header-name">
    <div class="space">
      <img class="back" src="@/assets/images/left.png" @click="back" v-if="needBack"/>
    </div>
    <p class="headTitle">{{title}}</p>
    <div class="space">
      <div>
        <img class="search" src="@/assets/images/search.png" @click="jumpSearch" v-if='search'>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      default: '假bilibili分站--(゜-゜)つロ 干杯~',
      type: String
    },
    needBack: {
      default: false,
      type: Boolean
    },
    search: {
      default: true,
      type: Boolean
    }
  },
  methods: {
    jumpSearch(){
      this.$router.push({
        name: 'search'
      })
    },
    back(){
      this.$router.go(-1);
    }
  }
}
</script>

<style lang="stylus">
.header-name{
  position: fixed;
  top: 0;
  z-index: 24;
  width:100%;
  height: 1.066666rem;
  background: #444;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0.053333rem 0.053333rem #222;
  .space{
    display:flex;
    flex: 1;
    align-items: center;
    .back{
      width: 0.5rem;
      height: 0.5rem;
      margin-left: 0.3rem;
    }
    .search{
      width: 0.5rem;
      height: 0.5rem;
      margin-left: 0.7rem;
      margin-top: .1rem;
    }
  }
}
</style>

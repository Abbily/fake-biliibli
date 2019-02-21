<template>
  <div class="tab">
    <div class="nav-tab">
      <div v-for="item in menus" :key="item.path" :class="$route.path.includes(item.name)?'tab-item-active':''" @click="changeActive(item)">{{item.meta.label}}</div>
    </div>
  </div>
</template>


<script>
export default {
  computed: {
  	menus() {
  		let menus = this.$router.options.routes;
  		let data = menus.filter(item=> {
  			return item.name === 'paint' || item.name === 'rank' || item.name === 'activity'
  		});
  		return data;
  	}
  },
  methods: {
    changeActive(data){
      this.$router.push(data.path);
    }
  }
}
</script>

<style lang="stylus">
.tab{
  height: 1.1rem;
  position: fixed;
  top: 1.066666rem;
  z-index: 22;
  width: 100vw;
  .nav-tab{
    background: #333333;
    top: 1.066666rem;
    height: 1.1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 0.899999rem;
    width: 100%;
    div{
      flex: 1;
      text-align: center;
    }
    .tab-item-active{
      border-bottom: .026666rem solid #fc6;
    }
  }
}

</style>

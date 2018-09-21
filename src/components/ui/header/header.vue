<template>
  <div class="header-name">
    <div class="space"></div>
    <div>
      <p class="headTitle">假bilibili分站--(゜-゜)つロ 干杯~</p>
    </div>
    <div class="space">
      <div>
        <img src="@/assets/images/search.png">
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style lang="stylus">
.header-name{
  position: fixed;
  top: 0;
  z-index: 23;
  width:100%;
  height: 1.066666rem;
  background: #444;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0.053333rem 0.053333rem #222;
  .space{
    flex: 1;
    img{
      width: 25px;
      height: 25px;
      float: right;
      margin-right: 15px;
    }
  }
}
</style>

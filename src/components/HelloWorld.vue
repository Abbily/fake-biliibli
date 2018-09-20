<template>
  <div class="hello">
    <p><a></a></p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  p{
    width:1rem;
    height:1rem;
    border: 1px solid red;
    a{
      display: block;
      width: 0.1rem;
      height: 0.1rem;
      border: 1px solid blue;
    }
  }

</style>

<template>
  <div>
    <div class="loading-wrapper">
      <img src="./loading.gif" alt="">
      <p>加载中</p>
    </div>
  </div>
</template>

<script>
    export default {

    }
</script>

<style scoped lang="stylus">
  .loading-wrapper
    width 70px;
    height 70px;
    background rgba(0,0,0,.7);
    display: flex
    flex-direction column
    align-items center
    color: white
    padding 15px
    border-radius 15px
    p
      margin-bottom 0
    img
      margin-top:10px
</style>

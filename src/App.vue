<template>
  <keep-alive>
    <!--<router-view>-->
        <index></index>
    <!--</router-view>-->
  </keep-alive>
</template>

<script>
  import index from 'components/index/index';
  export default {

    components:{
      index
    }
  }
</script>

<style scoped lang="stylus">
  body{
    height 100%
  }
</style>

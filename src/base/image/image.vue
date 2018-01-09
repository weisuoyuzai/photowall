<template>
    <div>
      <scroll :data="imgData" class="image-wrapper">
        <div class="wrapper">
          <div v-for="item in imgData">
            <img :src="'https://api.forgiveyu.com/'+item.path" alt="">
          </div>
        </div>
      </scroll>
    </div>
</template>

<script>
    import scroll from 'base/scroll/scroll'
    export default {
        components:{
          scroll
        },
        props:{
          imgData:{
            type:Array,
            default:[]
          }
        }
    }
</script>

<style scoped lang="stylus">
  .image-wrapper
    width 100%
    height: 100% !important
</style>

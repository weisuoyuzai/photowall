<template>
    <div>
      <scroll :data="imgData" class="image-wrapper" v-if="imgData">
        <!--<div class="wrapper">-->
          <!--<div v-for="item in imgData">-->
            <!--<img :src="'https://api.forgiveyu.com/'+item.path" alt="">-->
          <!--</div>-->
        <!--</div>-->
        <div class="wrapper">
          <waterfall :line-gap="getRealHalfWidth" auto-resize="true">
            <waterfall-slot v-for="item in imgData" :width="getHalfWidth" :height="resetHeight(item.height)">
              <div class="item">
                <img :src="'https://api.forgiveyu.com/'+item.path" alt="" class="image-item">
              </div>
            </waterfall-slot>
          </waterfall>
        </div>
      </scroll>
      <loading class="loading" v-show="!imgData"></loading>
    </div>
</template>

<script>
    import scroll from 'base/scroll/scroll';
    import loading from 'base/loading/loading';
    import {waterfall,waterfallSlot} from 'vue-waterfall';
    export default {
        components:{
          scroll,
          loading,
          waterfall,
          waterfallSlot
        },
        computed:{
          getHalfWidth(){
            return (document.documentElement.clientWidth-10)/2;
          },
          getRealHalfWidth(){
            return (document.documentElement.clientWidth)/2
          }
        },
        methods:{
          resetHeight(height){
            let x=(document.documentElement.clientWidth-10)/2/200;
            return height*x;
          },

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
    .item{
      padding 5px
      .image-item{
        width 100%
      }
    }

  .loading
    position: fixed;
    top 50%
    left:50%
    margin-top -50px
    margin-left -50px
</style>

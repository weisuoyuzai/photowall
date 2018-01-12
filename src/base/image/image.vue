<template>
    <div class="img-list">
      <loading class="loading" v-show="!imgData"></loading>
      <scroll :data="imgData" class="image-wrapper" v-if="imgData" :scrollDera="'v'">
        <!--<div class="wrapper">-->
          <!--<div v-for="item in imgData">-->
            <!--<img :src="'https://api.forgiveyu.com/'+item.path" alt="">-->
          <!--</div>-->
        <!--</div>-->
        <div class="wrapper">
          <waterfall :line-gap="getRealHalfWidth" auto-resize="true">
            <waterfall-slot v-for="item in imgData" :width="getHalfWidth" :height="resetHeight(item.height)">
              <div class="item">
                <div class="item-detail">
                  <img v-lazy="'https://api.forgiveyu.com/'+item.path" alt="" class="image-item" v-on:click="goDetail(item.path)">
                  <div class="btn-group" ref="btngroup">
                    <a href="#" class="btn-wrapper"><i class="icon-like"></i></a>
                    <a href="#" class="btn-wrapper"><i class="icon-comment"></i></a>
                  </div>
                </div>
              </div>
            </waterfall-slot>
          </waterfall>
        </div>
      </scroll>
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
        mounted(){
          setTimeout(()=>{
            this.getData();
          },20)
        },
        methods:{
          resetHeight(height){
            let x=(document.documentElement.clientWidth-10)/2/200;
            return height*x+40;
          },
          goDetail(path){
            path=path.replace(/^thumb\/thumb_/,'');
            this.$router.push(`/detail/${path}`);
          },
          getData(){
            this.$http.jsonp('https://api.forgiveyu.com/showimg.php',{jsonp:'callback'}).then((res)=>{
              this.imgData=res.data;
            })
          }
        },
        data(){
          return {
            imgData:[]
          }
        }
        // props:{
        //   imgData:{
        //     type:Array,
        //     default:function () {
        //       return [];
        //     }
        //   }
        // }
    }
</script>

<style scoped lang="stylus">
  .img-list{
    width 100%
    height 100%
  }
  .image-wrapper
    width 100%
    height: 100% !important
    .wrapper{
      padding-bottom 50px;
    }
    .item{
      padding 5px
      .item-detail{
        border 1px solid #d1d1d1
        border-radius 8px;
        overflow hidden
        box-shadow: 0px 5px 15px #888888;
        .image-item{
          width 100%
        }
        .btn-group{
          width 100%;
          height 40px
          display block
          display flex
          flex-direction row
          .btn-wrapper{
            display block
            width 50%
            height 100%
            .icon-like{
              display block
              background url("./like_icon.png") no-repeat;
              background-size 30px 30px
              background-position center
              width 100%;
              height 40px
              border-right 1px solid #d1d1d1
            }
            .icon-comment{
              display block
              background url("./commit.png") no-repeat;
              background-size 30px 30px
              background-position center
              width 100%;
              height 40px
            }
          }
        }
      }

    }

  .loading
    position: fixed;
    top 50%
    left:50%
    z-index: 100
    margin-top -50px
    margin-left -50px
</style>

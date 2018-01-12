<template>
  <transition name="slide">
    <div>
      <d-header class="dheader" :key="'dheader'"></d-header>
      <scroll class="detail-scroll" :scrollDera="'v'" :key="'dScroll'" :data="imgName">
        <div class="clearfix">
          <div class="container">
            <div class="content-wrapper">
              <div class="img-wrapper">
                <img :src="'https://api.forgiveyu.com/img/'+imgName" @load="imgLoad" @error="imgError" v-show="!imgerror">
                <loading class="loading" v-show="!imgloaded&&!imgerror"></loading>
                <div class="error" v-show="imgerror">×肥肠抱歉,图片无法展示</div>
                <div class="download" v-show="!imgerror">
                  <a :href="'https://api.forgiveyu.com/img/'+imgName" :download="imgName">
                    <div class="download-wrapper">
                      <i class="icon-download"></i>
                      <p>下载</p>
                    </div>
                  </a>
                </div>
                <div class="like" v-show="!imgerror">
                  <a href="#">
                    <div class="like-wrapper">
                      <i class="icon-like"></i>
                      <p>喜欢</p>
                    </div>
                  </a>
                </div>
                <div class="commentBtn" v-show="!imgerror">
                  <a href="#">
                    <div class="commentBtn-wrapper">
                      <i class="icon-comment"></i>
                      <p>评论</p>
                    </div>
                  </a>
                </div>
              </div>
              <comment v-show="!imgerror"></comment>
            </div>
          </div>
        </div>
      </scroll>
    </div>
  </transition>

</template>

<script>
    import dHeader from 'base/dheader/dheader';
    import loading from 'base/loading/loading';
    import scroll from 'base/scroll/scroll';
    import comment from 'components/comment/comment';
    export default {
      data(){
        return {
          imgName:'',
          imgloaded:false,
          imgerror:false
        }
      },
      components:{
        dHeader,
        loading,
        scroll,
        comment
      },
      mounted(){
        setTimeout(()=>{
          this.imgName=this.$route.params.name;
        },20)
      },
      deactivated(){
        this.$destroy(true);
      },
      methods:{
        getImg(){
          this.imgName=this.$route.params.name;
          console.log(this.$route.params.name);
        },
        imgLoad(){
          this.imgloaded=true;
          console.log('img loaded');
        },
        imgError(){
          this.imgerror=true;
          console.log('img load error');
        }
      }
    }
</script>

<style scoped lang="stylus">
  body{
    height 100%
  }
  .detail-scroll{
    width 100%
    height 100%
    position fixed
    left:0
    top:0
  }
  .clearfix{
    /*height 100%*/
    &:after,&:before{
      content ''
      display block
      clear: both
    }
  }
  .container{
    width 100%
    height 100%
    .dheader{
      width 100%
      height 50px
      z-index: 10
      position fixed;
      top:0
      left:0
    }
    .content-wrapper{
      margin-bottom 40px;
    }
    .img-wrapper{
      width 100%
      position relative
      margin-top 50px
      img{
        width 100%
      }
      .loading{
        position absolute
        left:50%
        top:50%
        margin-top -50px;
        margin-left -50px
      }
      .error{
        color #666;
        position absolute;
        top:0
        left:0
        width 100%
        text-align center
        height 300px;
        line-height 300px
      }
      .download,.like,.commentBtn{
        width 100%
        padding 0 10px
        box-sizing border-box
        margin-top 10px
        a{
          background #1C86EE
          width 100%
          display flex ;
          flex-direction row
          align-items center
          height 40px
          text-decoration none
          padding 5px
          line-height 30px
          box-sizing border-box
          border-radius 8px
          box-shadow 0 0 10px #838B83

          .download-wrapper,.like-wrapper,.commentBtn-wrapper{
            display flex
            flex-direction row
            align-items center
            margin:0 auto
            .icon-download,.icon-like,.icon-comment{
              background url("./download-w.png") no-repeat;
              background-size 30px 30px
              display block
              width 30px;
              height 30px;
            }
            .icon-like{
              background url("./unlike_icon.png") no-repeat;
              background-size 25px 25px
            }
            .icon-comment{
              background url("./commit-w.png") no-repeat;
              background-size 25px 25px
            }
            p{
              margin 0
              text-align center
              color: #fff
            }
          }

        }
      }
    }
  }
  .slide-enter-active, .slide-leave-active
    transition: all 0.3s
    z-index 100
  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
    z-index 100

</style>

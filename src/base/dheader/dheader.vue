<template>
    <div>
      <div class="dheader-container">
        <div class="dheader-wrapper">
          <a href="#" class="icon-back" @click.stop.prevent="back"></a>
          <p>图片详情</p>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        methods:{
          back(){
            this.$router.back();
          }
        }
    }
</script>

<style scope lang="stylus">
  .dheader-container{
    position fixed;
    left:0
    top:0
    background #fff;
    width 100%
    z-index: 15
    .dheader-wrapper{
      padding 5px 10px
      &:after,&:before{
        display block
        content ''
        clear: both
      }
      .icon-back{
        background url("./back.png") no-repeat
        background-size 40px 40px
        width 40px;
        height 40px;
        display block
        float left
      }
      p{
        float left
        line-height 40px;
        text-align center
        margin:0
        text-indent 20px;
      }
    }
  }
</style>

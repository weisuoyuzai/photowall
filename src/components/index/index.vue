<template>
    <div class="container">
      <div class="header">
        <m-header></m-header>
      </div>
      <m-image :imgData="data" class="image-list"></m-image>
    </div>
</template>

<script>
    import mImage from 'base/image/image';
    import scroll from 'base/scroll/scroll';
    import mHeader from 'components/header/header';
    export default {
      data(){
        return{
          data:null
        }
      },
      components:{
        mImage,
        scroll,
        mHeader
      },
      mounted(){
        setTimeout(()=>{
          this.getData();
        },20)
      },
      methods:{
        getData(){
          this.$http.jsonp('https://api.forgiveyu.com/showimg.php',{jsonp:'callback'}).then((res)=>{
            this.data=res.data;
          })
        }
      }
    }
</script>

<style scoped lang="stylus">
  .container
    width 100%
    height: 100%
    position fixed
    top:40px
    left:0
    .image-list
      width 100%
      height 100%
</style>

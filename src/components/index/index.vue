<template>
    <div class="container">
      <m-image :imgData="data" class="image-list"></m-image>
    </div>
</template>

<script>
    import mImage from 'base/image/image';
    import scroll from 'base/scroll/scroll';
    export default {
      data(){
        return{
          data:null
        }
      },
      components:{
        mImage,
        scroll
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
    top:0
    left:0
    .image-list
      width 100%
      height 100%
</style>

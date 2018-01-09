<template>
  <div ref="wrapper">
    <slot>123</slot>
  </div>
</template>

<script>
    import BScroll from 'better-scroll';
    export default {
      data(){
        return{
          scroll:null
        }
      },
      props:{
        data:{
          default:null
        }
      },
      mounted(){
        setTimeout(()=>{
          this.init();
        },20)
      },
      methods:{
        init(){
          this.scroll=new BScroll(this.$refs.wrapper);
        },
        refresh(){
          this.scroll&&this.scroll.refresh();
        }
      },
      watch:{
        data(){
          setTimeout(()=>{
            this.refresh();
            console.log("scroll已刷新")
          },20)
        }
      }
    }
</script>

<style scoped lang="stylus">
  .scroll
    width 100%
    height 100%
    position fixed
    top:0
    left:0

</style>

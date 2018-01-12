<template>
  <transition name="opac">
    <div>
      <div class="toast-wrapper">
        <p>{{mtext}}</p>
      </div>
    </div>
  </transition>
</template>

<script>
    export default {
        props:{
          mtext:{
            type:String,
            default:'text'
          }
        }
    }
</script>

<style scoped lang="stylus">
  .toast-wrapper
    width auto;
    height 70px;
    background rgba(0,0,0,.7);
    display: flex
    flex-direction column
    align-items center
    color: white
    padding 15px
    border-radius 15px
    p
      line-height 70px
      margin:0

  .opac-enter-active, .opac-leave-active
    transition: opacity  0.5s
  .opac-enter, .opac-leave-to
    opacity 0
</style>

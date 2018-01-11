<template>
    <div>
      <div class="top">
        <img :src="data.headurl" alt="" class="head">
        <p class="username">{{data.username}}</p>
      </div>
      <div class="bottom">
        <p class="content">{{data.content}}</p>
      </div>
    </div>
</template>

<script>
    export default {
        props:{
          data:{
            type:Object,
            default:{}
          }
        }
    }
</script>

<style scoped lang="stylus">
  .top{
    display flex
    flex-direction row
    align-items center
    .username{
      margin-left 10px
      color #949494
      font-weight bold
    }
    .head{
      width 40px;
      height 40px;
      border-radius 50%
    }
  }
  .bottom{
    .content{
      padding 10px 0
      margin: 0
      font-size 14px;
      border-bottom 1px solid #A9A9A9
    }
  }
</style>

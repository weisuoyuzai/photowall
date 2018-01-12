<template>
    <div>
      <a href="#" class="btn" @click.prevent="">
        <p>{{btext}}</p>
      </a>
    </div>
</template>

<script>
    export default {
        props:{
          btext:{
            type:String,
            default:'buttom'
          }
        }
    }
</script>

<style scoped lang="stylus">
  .btn{
    display block
    margin 0;
    line-height 30px;
    background #FFFAFA
    border-top 1px solid #EAEAEA
    border-bottom: 1px solid #EAEAEA
    box-sizing border-box
    text-decoration none
    box-shadow 0 3px 3px #DBDBDB
    p{
      margin:0
      padding 5px 15px;
      text-decoration none
      color: #7d7d7d
    }
  }

</style>

<template>
    <div>
      <div class="container">
        <div class="person-info">
          <img src="https://api.forgiveyu.com/img/1512052411__c88bb2a2-38e7-4498-9b14-a194bc0abddb.gif" class="headimg">
          <p class="username">admin</p>
        </div>
        <a href="#" class="upload-btn" @click="upload">
          <p>上传</p>
        </a>
      </div>
    </div>
</template>

<script>
    export default {
        methods:{
          upload(){
            this.$router.push('/upload');
          }
        }
    }
</script>

<style scoped lang="stylus">
  .person-info{
    width 100%
    display flex;
    flex-direction column
    align-items center
    padding 20px 0
    .headimg{
      width 80px;
      height:80px;
      border-radius 50%
    }
    .username{

    }
  }

  .upload-btn{
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

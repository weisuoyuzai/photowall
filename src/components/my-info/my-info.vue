<template>
    <div>
      <div class="container">
        <div class="person-info">
          <img src="https://api.forgiveyu.com/img/1512052411__c88bb2a2-38e7-4498-9b14-a194bc0abddb.gif" class="headimg">
          <p class="username">{{username}}</p>
        </div>
        <m-bottom :btext="'登录/注册'" @click.native="login" v-if="!islogin"></m-bottom>
        <a href="#" class="upload-btn" @click.prevent="upload" v-if="islogin">
          <p>上传</p>
        </a>
        <m-bottom :btext="'退出登录'" @click.native="logout" v-if="islogin"></m-bottom>
      </div>
    </div>
</template>

<script>
    import mBottom from 'base/m-bottom/m-bottom';
    export default {
        data(){
          return{
            username:'未登录',
            islogin:false
          }
        },
        components:{
          mBottom
        },
        methods:{
          upload(){
            this.$router.push('/upload');
          },
          login(){
            this.$router.push('/login');
          },
          logout(){
            this.username='未登录';
            this.islogin=false;
            this.$cookie.delete('username');
            this.$cookie.delete('islogin');
          }
        },
        activated(){
          if(this.$cookie.get('username')){
            this.username=this.$cookie.get('username');
          }
          this.islogin=this.$cookie.get('islogin');
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

  .upload-btn,.login-btn{
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

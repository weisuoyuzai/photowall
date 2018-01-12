<template>
  <div>
    <div class="login-container">
      <h1>注册</h1>
      <div class="login-input">
        <input type="text" placeholder="输入用户名" ref="username">
        <input type="password" placeholder="输入密码" ref="password">
      </div>
      <m-bottom :btext="'走你!'" class="l-btn" @click.native="login"></m-bottom>
      <loading :text="'注册中'" class="middle" v-show="reging"></loading>
      <toast :mtext="status" v-if="status" class="middle-toast"></toast>
    </div>
  </div>
</template>

<script>
  import mBottom from 'base/m-bottom/m-bottom';
  import loading from 'base/loading/loading';
  import toast from  'base/toast/toast';
  export default {
    data(){
      return{
        reging:false,
        status:''
      }
    },
    components:{
      mBottom,
      loading,
      toast
    },
    methods:{
      login(){
        this.reging=true;
        let username=this.$refs.username.value;
        let password=this.$refs.password.value;
        this.$http.get('https://api.forgiveyu.com/reg.php',{params:{username,password}}).then((res)=>{
          console.log(res.data);
          if(res.data.state){
            this.reging=false;
            if(res.data.state==0){
              this.$router.push('/login');
            }else {
              this.status=res.data.msg;
              setTimeout(()=>{
                this.status='';
              },3000)
            }
          }
        })
      }
    },
    activated(){
      if(this.$cookie.get('islogin')){
        this.$router.push('/myinfo');
      }
    }
  }
</script>

<style scoped lang="stylus">
  .login-container{
    display flex
    flex-direction column
    align-items center
    height 100%
    position relative
  }
  .middle-toast{
    position absolute
    top:50%;
    left: auto
    margin 0 auto
  }
  .middle{
    position absolute
    top:50%;
    left:50%;
    margin-top -50px;
    margin-left -50px;
  }
  .login-input{
    padding 10px
    margin-bottom 20px
  }
  .l-btn{
    width 100%
  }
  input[type=password]{
    margin-top 10px
  }
  input{
    width 100%
    height 40px;
    line-height 40px;
    border-radius 8px;
    border:1px solid #666;
    outline none
    padding 0 10px
    box-sizing border-box
  }
</style>

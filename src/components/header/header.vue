<template>
  <div>
    <div class="header-fix">
      <scroll :scrollDera="'h'" class="header-scroll">
        <div class="header-container">
          <div class="header-wrapper" @click="changeKind">
            <div class="item active">推荐</div>
            <div class="item">全部</div>
            <div class="item">动漫</div>
            <div class="item">可爱</div>
            <div class="item">风景</div>
            <div class="item">我的</div>
          </div>
        </div>
      </scroll>
    </div>
  </div>
</template>

<script>
    import scroll from 'base/scroll/scroll';
    export default {
        components:{
          scroll
        },
        methods:{
          changeKind(e){
            let divDom=e.target.parentNode.children;
            for(let i=0;i<divDom.length;i++){
              divDom[i].classList.remove('active');
            }
            e.target.classList.add('active');
            let kinds=e.target.innerText;
            switch (kinds){
              case '我的':
                this.$router.push('/myinfo');
                break;
              default:
                this.$router.push('/');
                break;
            }

          }

        }
    }
</script>

<style scoped lang="stylus">
  .header-scroll{
    background #fff
    height 42px;
    &:after,&:before{
      content ''
      display block
      clear: both
    }
  }
  .header-fix{
    position: fixed
    top:0
    left:0
    z-index: 10
    width 100%
  }
  .header-wrapper{
    width 100%
    display flex
    flex-direction row
    border-bottom 1px solid #d1d1d1
    background white;
  }
  .header-container{
    width 465px
    .item{
      width 93px;
      text-align center
      line-height 30px
      color: #7d7d7d
      padding 5px
    }
    .active{
      border-bottom 2px solid #5CACEE
      color #5CACEE
    }
  }
</style>

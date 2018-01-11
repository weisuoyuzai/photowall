<template>
    <div>
      <div>
        <div class="title">
          <h1>评论<span> ({{data.length}})</span></h1>
        </div>
        <comment-list class="commentlist" v-for="item in data" :data="item"></comment-list>
      </div>
    </div>
</template>

<script>
    import commentList from 'base/comment-list/comment-list';
    export default {
        data(){
          return{
            data:[
              {username:'test',headurl:'https://api.forgiveyu.com/img/1512052411__c88bb2a2-38e7-4498-9b14-a194bc0abddb.gif',content:'hhhh'},
              {username:'admin',headurl:'https://api.forgiveyu.com/img/1512052411__c88bb2a2-38e7-4498-9b14-a194bc0abddb.gif',content:'emmmmmmm'},
              {username:'小裕裕',headurl:'https://api.forgiveyu.com/img/1512052411__c88bb2a2-38e7-4498-9b14-a194bc0abddb.gif',content:'2333333'},
            ]
          }
        },
        components:{
          commentList
        }
    }
</script>

<style scoped lang="stylus">
  .title{
    padding 15px 0 0 15px;
    h1{
      font-size 16px;
    }
  }
  .commentlist{
    padding 15px;
  }
</style>

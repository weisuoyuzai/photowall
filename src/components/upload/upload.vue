<template>
    <div>
      <div class="container">
        <file-list :data="filelist" @filechange="acceptFile"></file-list>
        <a href="#" class="addimg-btn" @click="">
          <p>添加图片</p>
          <input type="file" id="uploadInput" @change="fileChange" accept="image/gif, image/png, image/jpeg" multiple="multiple">
        </a>
        <a href="#" class="upload-btn" @click="upload">
          <p>上传</p>
        </a>
      </div>
    </div>
</template>

<script>
  import fileList from 'base/file-list/file-list';
    export default {
      data(){
        return {
          filelist:[],
          allFileArray:[],
          time:new Date().getTime(),
          fileIndex:0
        }
      },
      components:{
        fileList
      },
      methods:{
        fileChange(e){
          this.filelist=e.target.files;
          console.log(e.target.files);
        },
        upload(){

        },
        ajax(){

        },
        acceptFile(data){
          this.allFileArray=data;
        }
      }
    }
</script>

<style scoped lang="stylus">
  #uploadInput{
    width 100%
    height 40px
    position absolute
    top:0
    left:0
    opacity 0
  }
  .addimg-btn{
    position:relative;
  }
  .upload-btn,.addimg-btn{
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

<template>
    <div class="rel">
      <scroll class="fix" :scrollDera="'v'" :data="filelist">
        <toast :mtext="'上传完毕'" class="toast" v-if="fileuploadcomplete"></toast>
        <div class="container">
          <file-list :data="filelist" @progressNum="progressNum" @filechange="acceptFile" :allfileuploadComplete="fileuploadcomplete"></file-list>
          <a href="#" class="addimg-btn">
            <p>添加图片</p>
            <input type="file" id="uploadInput" @change="fileChange" accept="image/gif, image/png, image/jpeg" multiple="multiple">
          </a>
          <a href="#" class="upload-btn" @click.prevent="upload">
            <p>上传</p>
          </a>
        </div>
      </scroll>
    </div>
</template>

<script>
  import fileList from 'base/file-list/file-list';
  import toast from 'base/toast/toast';
  import scroll from 'base/scroll/scroll';
    export default {
      data(){
        return {
          filelist:[],
          allFileArray:[],
          time:new Date().getTime(),
          fileIndex:0,     //第几个分片文件
          fileIndexTotal:0,  //分片文件总数
          size:1024*10,   //每次传10kb
          total:0,          //文件要传多少次
          fileNumber:0,    //传第几个文件,从0开始
          fileTotalNumber:0, //文件总数
          progressBar:null,
          jinduNum:null,
          fileuploadcomplete:false
        }
      },
      components:{
        fileList,
        toast,
        scroll
      },
      methods:{
        fileChange(e){
          this.filelist=e.target.files;
          console.log(e.target.files);
        },
        progressNum(e){
          this.$nextTick(()=>{
            this.progressBar=e.progressActive;
            this.jinduNum=e.jindu;
          })
        },
        upload(){
          this.fileuploadcomplete=false;
          if(this.allFileArray.length){
            this.total=Math.ceil(this.allFileArray[this.fileNumber].size/this.size);
            let fd=new FormData();
            fd.append('filename',this.allFileArray[this.fileNumber].name.toLowerCase());
            fd.append('index',this.fileIndex);
            fd.append('data',this.allFileArray[this.fileNumber].slice(this.size*this.fileIndex,this.size*(this.fileIndex+1)));
            fd.append('total',this.total);
            fd.append('time',this.time);

            this.$http.post('https://api.forgiveyu.com/upload.php',fd).then((data,err)=>{
              let status=data.data.states;
              if(status!=200){
                console.log('uploading');
                console.log(this.size*this.fileIndex,this.size*(this.fileIndex+1));
                this.fileIndex=this.fileIndex+1;
                this.upload();
              }else if(status==200){
                console.log('upload complete');
                this.fileIndex=0;
                this.fileNumber=this.fileNumber+1;
                console.log(this.fileIndex);
                return
              }
              let uploadPercent=parseInt((this.fileIndex/this.total)*100);
              this.progressBar[this.fileNumber].style.transform=`translate(${uploadPercent}%,0)`;
              this.jinduNum[this.fileNumber].innerText=uploadPercent+'%';
              if(uploadPercent==100){
                this.jinduNum[this.fileNumber].innerText='完成';
                this.jinduNum[this.fileNumber].style.color='lightgreen';
              }
            })
          }
        },
        sendData(){

        },
        acceptFile(data){
          this.allFileArray=data;
        }
      },
      activated(){
        if(!this.$cookie.get('islogin')){
          this.$router.push('/login');
        }
      },
      watch:{
        fileNumber(newval){
            if(newval<this.allFileArray.length&&newval!=0){
                this.upload();
            }else {
              this.fileNumber=0;
              this.allFileArray=[];
              this.fileuploadcomplete=true;
              console.log('all file upload complete');
            }
        },
        fileuploadcomplete(newval){
          if(newval){
            setTimeout(()=>{
              this.fileuploadcomplete=false;
            },3000)
          }
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
  .container{
    padding-top 42px
  }
  .fix{
    position fixed
    width 100%
    height 100%
    top:0
    left:0
  }
  .rel{
    /*position relative*/
  }
  .toast{
    position fixed
    left: 50%
    top:50%
    margin-top -50px;
    margin-left:-50px
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

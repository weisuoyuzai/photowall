<template>
    <div>
      <div class="file-container">
        <div class="file-item" v-for="item in fileData">
          <img src="./file.png" alt="" class="fileimg">
          <div class="middle">
            <p class="filename" ref="filename">{{item.name}}</p>
            <div class="progress" ref="progress">
              <div class="progress-active"></div>
            </div>
          </div>
          <span class="jindu">0%</span>
        </div>
      </div>

    </div>
</template>

<script>
    export default {
        data(){
          return {
            fileData:[]
          }
        },
        props:{
          data:{
            default:{}
          }
        },
        mounted(){
          setTimeout(()=>{
            let clientWidth=document.documentElement.clientWidth;
            const padd=20;
            let pgWidth=clientWidth-padd-100;
            if(this.$refs.progress){
              this.$refs.progress[0].style.width=pgWidth+'px';
              this.$refs.filename[0].style.width=pgWidth+'px';
            }
          },20)
        },
        watch:{
          data(){
            for(let i=0;i<this.data.length;i++){
              this.fileData.push(this.data[i]);
            }
            this.$emit('filechange',this.fileData);
            console.log(this.fileData);
            setTimeout(()=>{
              let clientWidth=document.documentElement.clientWidth;
              const padd=20;
              let pgWidth=clientWidth-padd-100;
              if(this.$refs.progress){
                for(let i=0;i<this.$refs.progress.length;i++){
                  this.$refs.progress[i].style.width=pgWidth+'px';
                  this.$refs.filename[i].style.width=pgWidth+'px';
                }
              }
            },20)
          }
        }
    }
</script>

<style scoped lang="stylus">
  .file-container{
    display: flex;
    flex-direction column
    align-items center
    .file-item{
      display flex
      flex-direction row;
      align-items center
      padding 5px 10px
      .fileimg{
        width 50px;
        height 50px;
      }
      .middle{
        .filename{
          line-height 25px;
          margin:0
          overflow hidden
          text-overflow ellipsis
          word-break break-all
          white-space nowrap
        }
        .progress{
          height 15px;
          border: 1px solid #D9D9D9;
          border-radius 4px;
          position relative
          overflow hidden
          .progress-active{
            position absolute
            top: 0
            left -100%
            width 100%
            height 15px
            background lightgreen
            transition all 0.2s
          }
        }
      }
      .jindu{
        line-height 60px
        width 50px;
        display block
        text-align right
      }
    }
  }
</style>

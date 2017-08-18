<template>
  <div class="email-demo" ondragstart="return false;" >
    <form name="form">
      <div class="form">
        <div class="email-item">
          <span>收件人</span>
          <div>
            <input v-model="model.recipient" type="text" @blur="getRecipient"/>
          </div>
        </div>
        <div class="email-menu">
          <a>添加抄送</a>
          <span>-</span>
          <a>添加密送</a>
          <span>|</span>
          <a>分别发送</a>
        </div>
        <div class="email-item">
          <span>主题</span>
          <div>
            <input v-model="model.title" type="text"/>
          </div>
        </div>
        <div class="email-menu">
          <a class="input-file">添加附件<input type="file" @change="uploadFile"/></a>
          <span>|</span>
          <a>超大附件</a>
        </div>
        <div class="email-item">
          <span>正文</span>
          <div class="email-body">
            <div>
              <Editor :path="path" v-model="model.content"></Editor>
            </div>
          </div>
        </div>
        <div class="email-menu">
          <span>收件人: <span>{{recipientName}}</span> <span>{{recipientEmal}}</span></span>
          <span>|</span>
          <span>签名 : 不使用</span>
        </div>
      </div>
      <div class="email-send">
          <button @click="send">发送</button>
          <button>定时发送</button>
          <button>存草稿</button>
          <button>关闭</button>
      </div>
    </form>
  </div>
</template>

<script>
import Editor from './editor.vue'
import mock from '@/fetch/mock.js'
export default {
  name: 'emailDemo',
  data () {
    return {
      model:{
        recipient:'',
        title:'',
        content:''
      },
      recipientName:null,
      recipientEmal:null,
      path: 'http://localhost:8888/api/upload',
      
    }
  },
  methods:{
    getRecipient(){
      console.log(this.model)
      this.recipientName = this.model.recipient;
      this.recipientEmal = this.model.recipient+'@icloudsoft.qq.com';
    },
    uploadFile(){
      
    },
    send(){
      console.log(this.model)
    }
  },
  components:{
    Editor
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .email-demo{
    height: 100%;
    width: 80%;
    min-width: 650px;
    margin: 0 auto;
    background: #fff;
    padding:8px 10px;
    border-radius: 4px;
  }
  .form{
    background: #f2f2f2;
    padding:10px 0 0 10px;
  }
  .email-item{
    width: 100%;
    overflow: hidden;
  }
  .email-item>span{
    display: inline-block;
    height: 22px;
    line-height: 22px;
    vertical-align: middle;
    width: 50px;
    float:left;
  }
  .email-item>div{
    width:calc(100% - 50px);
    float: left;
  }
  .email-item>div>input{
    width: 90%;
    border:1px solid #c3c3c3;
    border-top:1px solid #7c7c7c;
    border-left:1px solid #9a9a9a;
    outline: none;
    padding:1px 3px;
    min-height: 18px;
  }
  .email-menu{
    color:#2a586f;
    padding:6px 0 6px 50px
  }
  .email-menu>a{
    cursor: pointer
  }
  .email-menu>a:hover{
    text-decoration: underline
  }
  .email-body{
    height: auto;
    padding:2px 0 24px 0;
  }
  .email-body>div{
    height: 100%;
    width: 91%;
    
  }
  .email-send{
    background: #D5D5D5;
    border-bottom: 1px solid #b8b8b8;
    padding:6px 10px;
  }
  .email-send>button{
    height: 24px;
    padding:0 10px;
  }
  .input-file{
    display: inline-block;
    width:48px;
    cursor: pointer;
    height: 14px;
    overflow:hidden;
    position:relative;
  }
  .input-file input{
    opacity:0;
    cursor: pointer;
    filter:alpha(opacity=0);
    font-size:100px;
    position:absolute;
    top:0;
    right:0;
  }
</style>

<template>
  <div id="editor" v-model="editorContent" @input="result" ref="editor"></div>
</template>

<script>
  import E from 'wangeditor'
  export default {
    props: ['path'],
    data() {
      return {
        editorContent: '',
        editor:null
      }
    },
    mounted(){
      const editor = new E(this.$refs.editor)
      editor.customConfig.onchange = (html) => {
        this.editorContent = html;
      }
      //menus
      editor.customConfig.menus=['head','bold','italic','underline','strikeThrough','foreColor','backColor','link',
      'list','justify','quote','image','table'];
      //图片上传
      editor.customConfig.showLinkImg = true
      editor.customConfig.uploadImgShowBase64 = true;
      //editor.customConfig.uploadImgServer = this.path
      //编辑器初始化
      editor.create();
      this.editor = editor;
    },
    methods:{
      result(){
        this.$emit('input', this.editor.txt.html())
      }
    },
    watch:{
      editorContent(){
        console.log(this.editorContent)
      }
    }
  }
</script>
<style scoped>
#editor {
    height: 302px;
    width: 100%
}
</style>
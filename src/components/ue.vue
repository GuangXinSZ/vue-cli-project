<template>
  <div class="editor">
    <quill-editor v-model="content"
      ref="myQuillEditor"
      :options="editorOption"
      @blur="onEditorBlur($event)"
      @focus="onEditorFocus($event)"
      @ready="onEditorReady($event)">
    </quill-editor>
    <button @click="getContent()">获取内容</button>
  </div>
</template>
<script>
import Quill from 'quill'
export default {
  data () {
    return {
      content: '<h2>I am Example</h2>',
      editorOption: {
        modules: {
          history: {
            delay: 1000,
            maxStack: 50,
            userOnly: false
          },
          imageImport: true,
          imageResize: {
            displaySize: true
          }
        }
      }
    }
  },
  // if you need to manually control the data synchronization, parent component needs to explicitly emit an event instead of relying on implicit binding
  // 如果需要手动控制数据同步，父组件需要显式地处理changed事件
  methods: {
    onEditorBlur (editor) {
      // npm install vue-qiill-editor
      // npm install quill
      console.log('editor blur!', editor)
    },
    onEditorFocus (editor) {
      console.log('editor focus!', editor)
    },
    onEditorReady (editor) {
      console.log('editor ready!', editor)
    },
    onEditorChange ({ editor, html, text }) {
      console.log('editor change!', editor, html, text)
      this.content = html
    },
    getContent () {
      alert(this.content)
    }
  },
  mounted () {
    console.log('this is current quill instance object', this.editor)
  }
}
</script>
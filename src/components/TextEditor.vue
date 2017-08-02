<template>
	<div class="field">
    <quill-editor v-model="content" :options="editorOptions"></quill-editor>
  </div>
</template>

<script>
  import { quillEditor } from 'vue-quill-editor'
  export default {
    name: 'TextEditor',

    data () {
      return {
        content: '',

        editorOptions: {
          modules: {
            toolbar: [
              ['bold', 'italic'],
              [{ 'list': 'ordered' }, { 'list': 'bullet' }, 'blockquote', 'code-block'],
              ['link', 'image']
            ]
          },
          placeholder: 'Explain how you understand the concept (max. 300 words)',
          theme: 'snow'
        }
      }
    },

    components: {
      quillEditor
    }
  }
</script>

<style lang="sass-loader">
  @import '~@/assets/sass/variables';

  .ql-toolbar {
    border-bottom: none !important;
  }
  
  .ql-container {
    border: none !important;
    height: 250px;
    font-family: $font;
    font-size: $font-size-normal;

    .ql-editor {
      border: 1px solid $gray;
      word-break: break-all;

      &::before {
        font-style: normal;
      }

      &:hover {
        border: 1px solid $gray-darker;
      }

      &:focus {
        border: 1px solid $main;
      }
    }
  }
</style>
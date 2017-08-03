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

        // options for customizing Quill text editor:
        // choose which tools to appear in the toolbar
        // undo and redo tools need to be given a handler
        editorOptions: {
          modules: {
            toolbar: {
              container: [
                ['bold', 'italic'],
                [{ 'list': 'ordered' }, { 'list': 'bullet' }, 'blockquote', 'code-block'],
                ['link', 'image'],
                ['undo', 'redo']
              ],
              handlers: {
                'undo': function () {
                  this.quill.history.undo()
                },
                'redo': function () {
                  this.quill.history.redo()
                }
              }
            }
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

  // use font awesome icons for undo and redo buttons
  .ql-undo {
    &:after {
      content: "\f112";
      font-family: FontAwesome;
      color: #444;
    }
    &:hover:after {
      color: #06c;
    }
  }

  .ql-redo {
    &:after {
      content: "\f064";
      font-family: FontAwesome;
      color: #444;
    }
    &:hover:after {
      color: #06c;
    }
  }

  // customize Quill's styles to adhere to Bulma's styles
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

      &:before {
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
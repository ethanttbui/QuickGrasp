<template>
  <div class="field">
    <label class="label" v-if="label" v-text="label"></label>
    <quill-editor :name="name" v-validate="rules" v-model="content" :options="editorOptions" @input="removeErrors() + updateContent()"></quill-editor>
    <p class="help is-danger" v-if="errors.has(name)" v-text="errors.first(name)"></p>
  </div>
</template>

<script>
  import { quillEditor } from 'vue-quill-editor'

  export default {
    props: ['label', 'name', 'rules'],

    // inject $validator object from parent component,
    // allowing parent component to control validation inside this component
    inject: ['$validator'],

    components: {
      'quill-editor': quillEditor
    },

    data () {
      return {
        content: '',

        // options for customizing Quill:
        // choose which tools to appear in the toolbar,
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

    methods: {
      // remove errors associated with this field
      removeErrors () {
        this.errors.remove(this.name)
      },

      // update parent component with new value of content
      updateContent () {
        this.$emit('input', this.content)
      }
    }
  }
</script>

<!-- cannot use scoped style here because the elements generated 
by Quill are not within the scope of this component -->
<style lang="sass-loader">
  @import '~@/assets/sass/variables';

  // use font awesome icons for undo and redo buttons
  .ql-undo {
    &:after {
      content: "\f0e2";
      font-family: FontAwesome;
      color: #444;
    }
    &:hover:after {
      color: #06c;
    }
  }

  .ql-redo {
    &:after {
      content: "\f01e";
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
    border-radius: 3px 3px 0 0;
  }
  
  .ql-container {
    border: none !important;
    height: 15rem;
    font-family: $font;
    font-size: 1rem;
  }

  .ql-editor {
    border: 1px solid $gray;
    border-radius: 0 0 3px 3px;
    word-break: break-all;

    &:before {
      font-style: normal !important;
    }

    &:hover {
      border: 1px solid $gray-darker;
    }

    &:focus {
      border: 1px solid $main;
    }
  }
</style>
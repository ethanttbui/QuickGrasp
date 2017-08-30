<template>
  <div class="field">
    <label class="label" v-if="label" v-text="label"></label>
    <div class="control" :class="{'is-danger': error}">
      <div id="editor"></div>
    </div>
    <p class="help is-danger" v-if="error" v-text="error"></p>
  </div>
</template>

<script>
  import Quill from 'quill'

  export default {
    props: ['value', 'label', 'error'],

    mounted () {
      let self = this

      // options for customizing Quill:
      // choose which tools to appear in the toolbar,
      // undo and redo tools need to be given a handler
      let config = {
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

      // configure and initialize quill
      let quill = new Quill('#editor', config)
      quill.root.innerHTML = this.value

      // bind the editor's html content to the value prop
      // only update editor content if the new value does not come from the editor itself
      this.$watch('value', function (newValue, oldValue) {
        if (quill.root.innerHTML !== newValue) {
          quill.root.innerHTML = newValue
        }
      })

      // on text-change event, update parent component with the new html content
      quill.on('text-change', function (delta, oldDelta, source) {
        let html = quill.root.innerHTML

        // ignore dummy html content for validation purpose
        if (quill.getLength() === 1) {
          html = ''
        }

        self.$emit('input', html)
      })
    }
  }
</script>

<!-- cannot use scoped style here because the elements generated 
by Quill are not within the scope of this component -->
<style lang="sass-loader">
  @import '~@/assets/sass/variables';
  @import '~bulma/sass/utilities/initial-variables';
  @import '~quill/dist/quill.snow.css';

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
    font-family: $family-sans-serif;
    font-size: 1rem;
  }

  .ql-editor {
    border: 1px solid $grey-lighter;
    border-radius: 0 0 3px 3px;
    text-align: justify; 

    &:before {
      font-style: normal !important;
    }

    &:hover {
      border: 1px solid $grey-light;
    }

    &:focus {
      border: 1px solid $main;
    }
  }

  .is-danger .ql-editor {
    border: 1px solid $red;
  }
</style>
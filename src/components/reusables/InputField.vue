<template>
  <div class="field">
    <label class="label" v-if="label" v-text="label"></label>
    <div class="control has-icons-left">
      <input class="input" type="text" :placeholder="placeholder" :name="name" v-validate="rules" v-model="content" :class="{'is-danger': errors.has(name)}" @input="removeErrors() + updateContent()">
      <span class="icon is-small is-left">
        <i class="fa fa-book"></i>
      </span>
    </div>
    <p class="help is-danger" v-if="errors.has(name)" v-text="errors.first(name)"></p>
  </div>
</template>

<script>
  export default {
    props: ['label', 'name', 'rules', 'placeholder'],

    // inject $validator object from parent component,
    // allowing parent component to control validation inside this component
    inject: ['$validator'],

    data () {
      return {
        content: ''
      }
    },

    methods: {
      // remove errors associated with this field
      removeErrors () {
        this.errors.remove(this.name)
      },

      // update parent component with new value of content
      updateContent (field) {
        this.$emit('input', this.content)
      }
    }
  }
</script>

<style lang="sass-loader" scoped></style>
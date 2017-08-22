<template>
  <div>
    <div class="control has-icons-left">
      <input class="input" :name="name" type="text" :placeholder="placeholder" v-model="content" v-validate="rules" :class="{'is-danger': errors.has('name')}" @input="updateContent()">
      <span class="icon is-small is-left">
        <i class="fa fa-book"></i>
      </span>
    </div>
    <p class="help is-danger" v-if="errors.has('name')" v-text="errors.first('name')"></p>
  </div>
</template>

<script>
  export default {
    props: ['name', 'rules', 'placeholder'],

    data () {
      return {
        content: ''
      }
    },

    methods: {
      // update parent component with new value of content
      updateContent (field) {
        this.$emit('input', this.content)
      }
    }
  }
</script>

<style lang="sass-loader" scoped></style>
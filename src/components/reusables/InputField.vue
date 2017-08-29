<template>
  <div class="field">
    <label class="label" v-if="label" v-text="label"></label>
    <div class="control has-icons-left">
      <input class="input" type="text" :placeholder="placeholder" v-model="content" :class="{'is-danger': error}" @input="updateContent()">
      <span class="icon is-small is-left">
        <i class="fa fa-book"></i>
      </span>
    </div>
    <p class="help is-danger" v-if="error" v-text="error"></p>
  </div>
</template>

<script>
  export default {
    props: ['label', 'placeholder', 'error'],

    data () {
      return {
        content: ''
      }
    },

    methods: {
      // update parent component with new value of content
      updateContent () {
        this.$emit('input', this.content)
      }
    }
  }
</script>

<style lang="sass-loader" scoped></style>
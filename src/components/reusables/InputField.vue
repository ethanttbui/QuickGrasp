<template>
  <div class="field">
    <label class="label" v-if="label" v-text="label"></label>
    <div class="control has-icons-left">
      <input class="input" type="text" :placeholder="placeholder" v-model="content" :class="{'is-danger': errors.has(name)}" @input="onInput()">
      <span class="icon is-small is-left">
        <i class="fa fa-book"></i>
      </span>
    </div>
    <p class="help is-danger" v-if="errors.has(name)" v-text="errors.first(name)"></p>
  </div>
</template>

<script>
  export default {
    props: ['label', 'placeholder', 'name', 'errors'],

    data () {
      return {
        content: ''
      }
    },

    methods: {
      // remove errors associated with this field
      // update parent component with new value of content
      onInput () {
        this.errors.remove(this.name)
        this.$emit('input', this.content)
      }
    }
  }
</script>

<style lang="sass-loader" scoped></style>
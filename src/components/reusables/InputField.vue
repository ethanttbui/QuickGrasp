<template>
  <div class="field">
    <label class="label" v-if="label" v-text="label"></label>
    <div class="control has-icons-left">
      <input class="input" type="text" :placeholder="placeholder" :value="value" :class="{'is-danger': error}" @input="updateValue($event.target.value)">
      <span class="icon is-small is-left">
        <i class="fa fa-book"></i>
      </span>
    </div>
    <p class="help is-danger" v-if="error" v-text="error"></p>
  </div>
</template>

<script>
  export default {
    props: ['value', 'label', 'placeholder', 'error'],

    methods: {
      // update parent component with the new input value
      updateValue (value) {
        this.$emit('input', value)
      }
    }
  }
</script>

<style lang="sass-loader" scoped></style>
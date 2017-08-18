<template>
  <section class="hero is-primary is-bold is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="box" v-for="result in searchResults">
          <a v-text="result.name"></a>
          <div v-html="result.explanation"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import { search } from '@/mixins/database'

  export default {
    props: ['searchKey'],

    // this mixin handles retrieving and filtering data from the server
    mixins: [search],

    created () {
      // normalize and set search string
      let searchString = this.searchKey.replace(/-/g, ' ')
      this.setSearchString(searchString)
    }
  }
</script>

<style lang="sass-loader" scoped>
  a {
    font-weight: bold;
    &:hover {
      text-decoration: underline;
    }
  }
</style>
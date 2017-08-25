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
  import { SearchHttp } from '@/js/database'

  export default {
    props: ['searchKey'],

    data () {
      return {
        http: new SearchHttp(),
        searchResults: []
      }
    },

    created () {
      // normalize and set search string
      let searchString = this.searchKey.replace(/-/g, ' ')

      let self = this
      this.http.getSearchResults(searchString)
        .then(function (data) {
          self.searchResults = data
        })
        .catch(function (error) {
          console.log(error)
        })
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
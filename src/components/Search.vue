<template>
  <section class="hero is-primary is-bold is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="box" v-for="(concept, conceptId) in searchResults">
          <router-link :to="'/concept/' + conceptId" v-text="concept.name"></router-link>
          <div v-html="concept.bestExplanation"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import { SearchHttp } from '@/js/http'

  export default {
    props: ['searchKey'],

    data () {
      return {
        http: new SearchHttp(),
        searchResults: []
      }
    },

    created () {
      // normalize search string
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
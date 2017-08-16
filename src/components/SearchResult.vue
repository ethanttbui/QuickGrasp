<template>
  <section class="hero is-primary is-bold is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="box" v-for="result in searchResults">
          <p v-text="result.name"></p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import { search } from '@/mixins/database'

  export default {
    props: ['keyword'],

    mixins: [search],

    created () {
      let subKeys = this.keyword.split('-')
      for (let subKey of subKeys) {
        if (this.searchConcept(subKey).length !== 0) {
          break
        }
      }
    }
  }
</script>

<style lang="sass-loader" scoped></style>
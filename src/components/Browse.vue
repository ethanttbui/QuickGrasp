<template>
  <section class="hero is-primary is-bold is-fullheight">
    <div class="hero-body">
      <div class="container">

          <!-- recommmended concepts -->
          <p class="title is-5">Top Concepts</p>
          <div class="box">
            <div class="columns is-multiline">
              <div class="column is-3" v-for="(concept, conceptId) in topConcepts">
                <router-link :to="'/concept/' + conceptId" v-text="concept.name"></router-link>
              </div>
            </div>
          </div>

          <p class="title is-5">Recommended Concepts</p>
          <div class="box"></div>

          <!-- concepts by category -->
          <p class="title is-5">Concepts by Category</p>
          <div class="box"></div>

      </div>
    </div>
  </section>
</template>

<script>
  import { BrowseHttp } from '@/js/http'

  export default {
    data () {
      return {
        http: new BrowseHttp(),
        topConcepts: []
      }
    },

    created () {
      let self = this
      this.http.getTopConcepts()
        .then(function (data) {
          self.topConcepts = data
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
</script>

<style lang="sass-loader" scoped></style>
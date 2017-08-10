<template>
  <section class="hero is-primary is-bold is-fullheight">
    <div class="hero-body">
      <div class="container">

          <!-- recommmended concepts -->
          <p class="title is-5">Recommended Concepts</p>
          <div class="box">
            <div class="columns is-multiline">
              <div class="column is-3" v-for="concept in recommendedConcepts"><a href="#" v-text="concept.name"></a></div>
            </div>
          </div>

          <!-- concepts by category -->
          <p class="title is-5">Browse by Category</p>
          <div class="box"></div>

      </div>
    </div>
  </section>
</template>

<script>
  import { concepts } from '@/mixins/firebase'

  export default {
    mixins: [concepts]
  }
</script>

<style lang="sass-loader" scoped></style>
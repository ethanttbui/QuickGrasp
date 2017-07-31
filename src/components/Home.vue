<template>
  <section class="hero is-primary is-bold is-fullheight">
    <!-- Hero content: will be in the middle -->
    <div class="hero-body">
      <div class="container has-text-centered">

        <!-- page title and subtitle -->
        <h1 class="title">
          QuickGrasp
        </h1>
        <h2 class="subtitle">
          Concepts made Simple
        </h2>
  
        <!-- search bar -->
        <div class="field has-addons">
          <div class="control is-expanded">
            <input class="input" type="text" placeholder="Search concepts">
          </div>
          <div class="control">
            <a class="button is-success is-inverted is-outlined">
              Search
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'home'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass-loader" scoped>
  @import '~bulma/sass/utilities/_all';
  @import '../assets/sass/variables';

  .title {
    font-size: 3.5rem;
  }

  .subtitle {
    font-size: 1.5rem;
  }

  .field {
    margin: 0 20% 0 20%;
    @include mobile {
      margin: 0 5% 0 5%;
    }

    .input {
      box-shadow: none;
      border: none;
      height: 3.5rem;
      font-size: 1.25rem;
    }

    .button {
      height: 3.5rem;
      font-size: 1.25rem;
      &:hover {
        background-color: transparent !important;
        color: #fff !important;
      }
    }
  }
</style>

<template>
  <section class="hero is-success is-fullheight">
    <!-- Hero content: will be in the middle -->
    <div class="hero-body">
      <div class="container has-text-centered">

        <!-- page title -->
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
  @import '~bulma/sass/utilities/mixins.sass';
  @import '~bulma/sass/utilities/variables.sass';

  .title {
    font-size: 3.5rem;
  }

  .subtitle {
    font-size: 1.5rem;
  }

  .field {
    margin: 0 20% 0 20%;
    @include mobile {
      margin: 0 10% 0 10%;
    }
  }

  .input {
    box-shadow: none;
    border: none;
    height: 3.5rem;
    font-size: $size-5;
    font-weight: $weight-light;
  }

  .button {
    height: 3.5rem;
    font-size: $size-5;
    &:hover {
      background-color: $green !important;
      color: $white !important;
    }
    &:active {
      background-color: $white !important;
      color: $green !important;
      box-shadow:none;
    }
  }
</style>

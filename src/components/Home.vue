<template>
  <div class="container has-text-centered">

    <!-- page title and subtitle -->
    <p class="title is-1">
      QuickGrasp
    </p>
    <p class="subtitle is-4">
      Concepts made Simple
    </p>

    <!-- search bar -->
    <div class="field has-addons">
      <div class="control is-expanded">
        <input class="input" type="text" placeholder="Search concepts">
      </div>
      <div class="control">
        <a class="button is-primary is-inverted is-outlined">
          <span class="icon">
            <i class="fa fa-search"></i>
          </span>
          <span class="is-hidden-mobile">Search</span>
        </a>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass-loader" scoped>
  @import '~bulma/sass/utilities/_all';
  @import '~@/assets/sass/variables';

  .field {
    margin: 0 20% 0 20%;
    @include mobile {
      margin: 0 5% 0 5%;
    }

    .input {
      border: none;
      height: 3.5rem;
      font-size: 1.25rem;
    }

    .button {
      height: 3.5rem;
      font-size: 1.25rem;

      &:hover {
        background-color: $primary-color-darker !important;
        color: #fff !important;
      }
    }
  }
</style>

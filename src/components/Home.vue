<template>
  <section class="hero is-primary is-bold is-fullheight">
    <div class="hero-body">
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
            <input class="input" type="text" placeholder="Search concepts" v-model="searchString" @keyup.enter="goToSearch">
          </div>
          <div class="control">
            <a class="button is-primary is-inverted is-outlined" @click="goToSearch">
              <span class="icon">
                <i class="fa fa-search"></i>
              </span>
              <span class="is-hidden-mobile">Search</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        searchString: ''
      }
    },

    methods: {
      // navigate to Search component if searchString is not empty
      goToSearch () {
        if (this.searchString) {
          let route = '/search/' + this.searchString.toLowerCase().replace(/ /g, '-')
          this.$router.push(route)
        }
      }
    }
  }
</script>

<style lang="sass-loader" scoped>
  @import '~@/assets/sass/mixins';
  @import '~@/assets/sass/variables';

  .field {
    margin: 0 20%;
    @include mobile {
      margin: 0 5%;
    }
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
      background-color: $main-darker !important;
      color: $main-invert !important;
    }
  }

  .icon {
    margin: 0 !important;
  }
</style>

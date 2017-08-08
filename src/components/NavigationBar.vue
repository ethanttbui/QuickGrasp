<template>
	<nav class="navbar is-transparent has-shadow">

		<!-- brand section with logo and burger icon -->
	  <div class="navbar-brand" :class="{ 'has-border':isActive }">
	    <router-link to="/" class="navbar-item">
	      QuickGrasp
	    </router-link>

	    <div class="navbar-burger" :class="{ 'is-active':isActive }" @click="toggleNavMenu">
	      <span></span>
	      <span></span>
	      <span></span>
	    </div>
	  </div>

		<!-- main navigation menu -->
	  <div class="navbar-menu" :class="{ 'is-active':isActive }">
	    <div class="navbar-end">
	    	<router-link to="/browse" class="navbar-item">
	    		Browse Concepts
	    	</router-link>
	    	<router-link to="/explain" class="navbar-item">
	    		Explain Concepts
	    	</router-link>
	    	<a class="navbar-item">
	    		<a class="button is-warning">
            <span class="icon">
              <i class="fa fa-user-circle"></i>
            </span>
            <span>Login</span>
          </a>
	    	</a>
	    </div>
	  </div>

	</nav>
</template>

<script>
  export default {
    data () {
      return {
        isActive: false
      }
    },

    methods: {
      toggleNavMenu () {
        this.isActive = !this.isActive
      }
    }
  }
</script>

<style lang="sass-loader" scoped>
  @import '~@/assets/sass/mixins';
  @import '~@/assets/sass/variables';

	.navbar {
		position: fixed;
		width: 100%;
		background-color: $main-darker;
    border-bottom: 1px solid $main-invert;
    z-index: map-get($zindex, navbar);

  	.navbar-burger {
  		span {
  			background-color: $main-invert;
  			height: 2px;
  		}
  		&:hover {
  			background-color: transparent;
  		}
  	}

    .navbar-item {
      color: $main-invert;
      &:hover {
        background-color: transparent;
      }
    }
  }

  .has-border {
    @include touch {
      border-bottom: 1px solid $main-invert;
    }
  }
</style>
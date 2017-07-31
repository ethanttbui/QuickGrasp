<template>
	<nav class="navbar is-transparent has-shadow">
	  <div class="navbar-brand" :class="{ 'has-border':isActive }">
	    <a class="navbar-item" href="/">
	      QuickGrasp
	    </a>

	    <div class="navbar-burger" :class="{ 'is-active':isActive }" @click="toggleNavMenu">
	      <span></span>
	      <span></span>
	      <span></span>
	    </div>
	  </div>

	  <div class="navbar-menu" :class="{ 'is-active':isActive }">
	    <div class="navbar-end">
	    	<a class="navbar-item">
	    		Browse Concepts
	    	</a>
	    	<a class="navbar-item">
	    		Explain Concepts
	    	</a>
	    	<a class="navbar-item">
	    		<a class="button is-warning">
            <span>Login</span>
            <span class="icon">
              <i class="fa fa-user-circle"></i>
            </span>
          </a>
	    	</a>
	    </div>
	  </div>
	</nav>
</template>

<script>
  export default {
    name: 'navbar',

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
  @import '~bulma/sass/utilities/_all';

	.navbar {
		position: fixed;
		width: 100%;
		background-color: transparent;
    border-bottom: 1px solid #fff;

  	.navbar-burger {
  		span {
  			background-color: #fff;
  			height: 2px;
  		}
  		&:hover {
  			background-color: transparent;
  		}
  	}

    .navbar-item {
      color: #fff;
      &:hover {
        background-color: transparent;
      }
    }
  }

  .has-border {
    @include touch {
      border-bottom: 1px solid #fff;
    }
  }
</style>
<template>
	<nav class="navbar is-transparent has-shadow">
	  <div class="navbar-brand">
	    <a class="navbar-item" href="/">
	      QuickGrasp
	    </a>

	    <div class="navbar-burger">
	      <span></span>
	      <span></span>
	      <span></span>
	    </div>
	  </div>

	  <div class="navbar-menu">
	    <div class="navbar-start"></div>
	    <div class="navbar-end">
	    	<a class="navbar-item">
	    		Browse Concepts
	    	</a>
	    	<a class="navbar-item">
	    		Explain Concepts
	    	</a>
	    	<a class="navbar-item">
	    		Profile
	    	</a>
	    </div>
	  </div>
	</nav>
</template>

<script>
	export default {
	  name: 'navbar'
	}
</script>

<style lang="sass-loader" scoped>
	@import '~bulma/sass/utilities/variables';

	.navbar {
		position: fixed;
		width: 100%;
		background-color: $info;
		

		.navbar-item {
			color: $white;
			&:hover {
				background-color: transparent;
			}
		}

		.navbar-burger {
			span {
				background-color: $white;
				height: 2px;
			}

			&:hover {
				background-color: transparent;
			}
		}
	}
</style>
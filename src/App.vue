<template>
  <div>

		<!-- navigation bar -->
  	<NavBar></NavBar>

		<!-- hero container containing router view -->
  	<section class="hero is-primary is-bold is-fullheight">
	    <div class="hero-body">
    		<router-view></router-view>
    	</div>
  	</section>
    
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'

export default {
  name: 'app',
  components: { NavBar }
}
</script>

<style lang="sass-loader"></style>

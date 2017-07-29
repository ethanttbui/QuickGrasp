<template>
	<div>
  	<NavBar></NavBar>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './components/NavBar'

export default {
  name: 'app',
  components: { NavBar }
}
</script>

<style lang="sass-loader">
	@import './assets/bulma-override';
	@import '~bulma/bulma';
</style>

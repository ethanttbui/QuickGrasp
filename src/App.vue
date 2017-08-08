<template>
  <div>
  	<navigation-bar></navigation-bar>
    <router-view></router-view>
  </div>
</template>

<script>
  import NavigationBar from '@/components/NavigationBar'

  export default {
    components: {
      'navigation-bar': NavigationBar
    }
  }
</script>

<!-- import main sass stylesheet -->
<style src="@/assets/sass/main.scss" lang="sass-loader"></style>

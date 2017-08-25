import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Browse from '@/components/Browse'
import Explain from '@/components/Explain'
import Search from '@/components/Search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },

    {
      path: '/explain',
      name: 'explain',
      component: Explain
    },

    {
      path: '/browse',
      name: 'browse',
      component: Browse
    },

    {
      path: '/search/:searchKey',
      name: 'search',
      component: Search,
      props: true
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Explain from '@/components/Explain'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },

    {
      path: '/explain',
      name: 'Explain',
      component: Explain
    }
  ]
})

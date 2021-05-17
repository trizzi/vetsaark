import Vue from 'vue'
import Router from 'vue-router'
import Landingpage from '@/components/Landingpage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landingpage',
      component: Landingpage
    }
  ]
})

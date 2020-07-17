import Vue from 'vue'
import Router from 'vue-router'
import screen1 from '@/components/screen1'
import screen2 from '@/components/screen2'
import index from '@/components/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'screen1',
      component: screen1
    },
    {
      path: '/screen2',
      name: 'screen2',
      component: screen2
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
  ]
})

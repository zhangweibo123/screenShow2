import Vue from 'vue'
import Router from 'vue-router'
import screen1 from '@/components/screen1'
import screen2 from '@/components/screen2'
import index from '@/components/index'
import oeeDay from '@/components/oeeDay'

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
    {
      path: '/oeeDay',
      name: 'oeeDay',
      component: oeeDay
    },
  ]
})

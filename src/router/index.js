import Vue from 'vue'
import Router from 'vue-router'
import oeeMonth from '@/components/oeeMonth'
import progress from '@/components/progress'
import oeeDay from '@/components/oeeDay'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'oeeDay',
      component: oeeDay
    },
    {
      path: '/oeeMonth',
      name: 'oeeMonth',
      component: oeeMonth
    },
    {
      path: '/progress',
      name: 'progress',
      component: progress
    },
    {
      path: '/oeeDay',
      name: 'oeeDay',
      component: oeeDay
    },
  ]
})

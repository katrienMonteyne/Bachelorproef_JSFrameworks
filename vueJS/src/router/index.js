import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/test'
import Test2 from '@/components/test2'
import Profile from '@/components/profile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/profiel',
      name: 'profiel',
      component : Profile

    },
    {
      path: '/',
      name: 'test',
      component: Test
    },
    {
      path: '/postje',
      name: 'test2',
      component : Test2

    }

  ]
})

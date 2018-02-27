import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
<<<<<<< HEAD
import Test from '@/components/test'
import Test2 from '@/components/test2'
=======

>>>>>>> parent of caa9471... test axios
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
<<<<<<< HEAD
      name: 'test',
      component: Test
    },
    {
      path: '/postje',
      name: 'test2',
      component : Test2
=======
      name: 'HelloWorld',
      component: HelloWorld
>>>>>>> parent of caa9471... test axios
    }
  ]
})

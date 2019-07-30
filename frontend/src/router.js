import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home.vue'
import Remote from './views/remote.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/about.vue')
    },
    {
      path: '/remotes',
      name: '',
      component: Remote,
      children: [
        {
          path: 'yuri',
          component: () => import(/* webpackChunkName: "about" */ './components/remote-yuri.vue')
        }
      ]
    },
    {
      path: '/remote-yuri',
      name: 'remote-yuri',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/remote-yuri.vue')
    }
  ]
})

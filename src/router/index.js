import Vue from 'vue'
import Router from 'vue-router'
import Mic from '@/pages/Mic'
import Login from '@/pages/Login'
import Fibonacci from '@/pages/Fibonacci'

import {auth} from '@/services/fireinit'
import store from '@/store'

Vue.use(Router)

const getCurrentUser = () => new Promise((resolve, reject) => {
  if (auth.currentUser) {
    return resolve(auth.currentUser)
  }

  return auth.onAuthStateChanged(resolve)
})

export const createRouter = () => {
  const router = new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'mic',
        component: Mic,
        meta: {
          requiredLogin: true
        }
      },
      {
        path: '/fibonacci',
        name: 'Fibonacci',
        component: Fibonacci
      },
      {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
          requiredNoLogin: true
        }
      },
      { path: '*', redirect: '/' }
    ]
  })
  router.beforeEach(async (to, from, next) => {
    const currentUser = await getCurrentUser()
    const requiredLogin = to.matched.some(record => record.meta.requiredLogin)
    const requiredNoLogin = to.matched.some(record => record.meta.requiredNoLogin)

    store.commit('setUser', currentUser)

    if (requiredLogin && !currentUser) {
      next(`/login?redirect=${to}`)
    } else if (requiredLogin && currentUser) {
      next()
    } else if (requiredNoLogin && currentUser) {
      next(`/fibonacci`)
    } else {
      next()
    }
  })

  return router
}

import Vue from 'vue'
import VueRouter from 'vue-router'
import Homepage from '../views/Homepage.vue'
import Myblog from '../views/Myblog.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'homepage',
    component: Homepage
  },
  {
    path: '/myblog',
    name: 'myblog',
    meta:{
      login:true
    },
    component: Myblog
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
  if(to.meta.login){
    store.commit('show_login')
  }
  else{
    next()
  }
})

export default router

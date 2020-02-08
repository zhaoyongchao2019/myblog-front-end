import Vue from 'vue'
import VueRouter from 'vue-router'
import Homepage from '../views/Homepage.vue'
import Myblog from '../views/Myblog.vue'
import Showarticle from '../views/Showarticle'
import EditorBar from '../components/EditorBar'
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
    component: Myblog,
    children:[
      {
        path:'showarticle',
        component: Showarticle
      },
      {
        path:'writearticle',
        component: EditorBar
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
  if(to.meta.login){//需要登录才能进入的页面
    if(store.state.username){//已经登录
      next()
    }
    else{//没有登录
      store.commit('show_login')
    }
  }
  else{
    next()
  }
})

export default router

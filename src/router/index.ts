import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import useAuth from '@/stores/auth'

import LoginUserView from '@/views/LoginUserView.vue'
import AboutView from '@/views/AboutView.vue'
import UserView from '@/views/UserView.vue'




const routes:Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      requireAuth: false
    }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginUserView,
    meta: {
      requireAuth: false
    }
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    meta: {
      requireAuth: true
    }
  },
  {
    path:'/user/:id',
    name:'user',
    component: UserView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes 
})

router.beforeEach(async(to, from, next)=>{
  const auth = useAuth();
  const isAuth = auth.token;
  const needAuth = to.meta.requireAuth

  if(needAuth && isAuth === ''){
    next('login')
  } else {
    next()
  }
})

export default router

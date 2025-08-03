// index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home.vue'
import Login from '@/views/Login.vue'
import News from '@/views/News.vue'
import story from '@/views/story.vue'
import User from '@/views/Users.vue'
import settings from '@/views/settings.vue'


const routes = [
  { path: '/', name: 'Homepage', component: () => import('@/HomePage/pages/Home.vue')} ,
  { path: '/Login', name: 'Login', component: Login } ,
  { path: '/home', name: 'Home', component: Home },        
  { path: '/users', name: 'User', component: User },        
  { path: '/news', name: 'News', component: News },
  { path: '/story', name: 'story', component: story },
  { path: '/settings', name: 'settings', component: settings },
            
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

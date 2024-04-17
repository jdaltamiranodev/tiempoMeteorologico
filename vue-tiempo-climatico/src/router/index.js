import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Prueba from '@/components/Prueba.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView, Prueba
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

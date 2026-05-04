import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

import HomeView from '@/views/HomeView.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('@/views/NewsView.vue')
  },
  {
    path: '/news/:id',
    name: 'newsDetail',
    component: () => import('@/views/NewsDetailView.vue')
  },
  {
    path: '/topics',
    name: 'topics',
    component: () => import('@/views/TopicsView.vue')
  },
  {
  path: '/favorites',
  name: 'favorites',
  component: () => import('@/views/FavoritesView.vue')
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
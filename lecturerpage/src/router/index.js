// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Navbar from '@/components/Navbar.vue'

const routes = [
  {
    path: '/announcements/create',
    component: () => import('@/views/Announcements/Create.vue'),
    meta: { title: 'Create Announcement' }
  },
  {
    path: '/announcements',
    component: () => import('@/views/Announcements/Overview.vue'),
    meta: { title: 'Announcements' }
  },
  {
    path: '/assignments/create',
    component: () => import('@/views/Assignments/Create.vue'),
    meta: { title: 'Create Assignment' }
  },
  {
    path: '/assignments',
    component: () => import('@/views/Assignments/Overview.vue'),
    meta: { title: 'Assignments' }
  },
  // Add other routes as needed
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
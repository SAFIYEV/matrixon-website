import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CoLearn from '../views/CoLearn.vue'

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/colearn', name: 'colearn', component: CoLearn },
  ],
  scrollBehavior(to, _from, saved) {
    if (saved) return saved
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
})

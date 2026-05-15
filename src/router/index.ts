import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CoLearn from '../views/CoLearn.vue'
import AgenticBrowser from '../views/AgenticBrowser.vue'

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/colearn', name: 'colearn', component: CoLearn },
    { path: '/browser', name: 'browser', component: AgenticBrowser },
  ],
  scrollBehavior(to, _from, saved) {
    if (saved) return saved
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
})

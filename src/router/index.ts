import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AgenticBrowser from '../views/AgenticBrowser.vue'
import Mixa from '../views/Mixa.vue'
import Web3Fren from '../views/Web3Fren.vue'
import HeyAgent from '../views/HeyAgent.vue'

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/heyagent', name: 'heyagent', component: HeyAgent },
    { path: '/browser', name: 'browser', component: AgenticBrowser },
    { path: '/mixa', name: 'mixa', component: Mixa },
    { path: '/web3-fren', name: 'web3-fren', component: Web3Fren },
  ],
  scrollBehavior(to, _from, saved) {
    if (saved) return saved
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
})

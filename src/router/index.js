import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PrivacyPolicy from '../components/PrivacyPolicy.vue'
import TermsConditions from '../components/TermsConditions.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/privacy-policy',
    name: 'privacy',
    component: PrivacyPolicy
  },
  {
    path: '/terms-conditions',
    name: 'terms',
    component: TermsConditions
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router 
import { createWebHistory, createRouter } from 'vue-router'
import Home from "@/components/Home.vue"
import BingoCard from '@/components/BingoCard.vue'

const routes = [
    {path: '/', component: Home},
    {path: '/card', component: BingoCard}
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '../views/Landing.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Landing,
    meta: { title: 'Landing' }
  },

]

const router = new VueRouter({
  routes
})

export default router
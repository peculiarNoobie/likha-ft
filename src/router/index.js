import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/HomeDashboard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '',
        component: () => import('@/components/Home.vue'),
        meta: { title: 'Home' }
      },
      {
        path: 'home',
        component: () => import('@/components/Home.vue'),
        meta: { title: 'Home' }
      },

      {
        path: 'calendar',
        component: () =>import('@/components/Calendar.vue'),
        meta: { title: 'Calendar' }
      },
      {
        path: 'eventPage',
        component: () => import('@/components/EventPage.vue'),
        meta: { title: 'Event Page' }
      },
      {
        path: 'userPage',
        component: () => import('@/components/UserPage.vue'),
        meta: { title: 'User' }
      }
    ]
  },

]

const router = new VueRouter({
  routes
})

export default router

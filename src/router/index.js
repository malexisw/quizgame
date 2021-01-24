import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Questions from '../views/Questions.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/questions/:category',
    name: 'Questions',
    component: Questions,
    props: true
  },
  {
    path: '*',
    redirect: 'Home',
    component: Home
  }
]

const router = new VueRouter({
  routes
})

export default router

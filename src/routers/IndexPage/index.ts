import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:"/Index",
    component:() => import('@/views/IndexPage/About.vue'),
    name:"About"
  }
]

const router = new VueRouter({
  routes
})

export default router;

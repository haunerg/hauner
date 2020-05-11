import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter)
import Vant from '@/views/Vant'
export default new VueRouter({
    routes:[
        {
            path:'/',
            name:'vant',
            component:Vant
        },
    ]
})


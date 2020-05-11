import Vue from 'vue'
import App from './index.vue'

import "@/middleware";

Vue.config.productionTip = false;

import scan from '@/assets/scan_file/vant.js';
import router from '@/routers/vant'
console.log(router,'saas')
Vue.use(scan);

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
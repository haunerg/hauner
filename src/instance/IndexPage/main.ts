import Vue from 'vue'
import App from './IndexPage.vue'

import router from "@/routers/IndexPage";
import store from '@/store/Index';

import "@/middleware";

import scanComponentsInterface from "@/interface/other/scanComponents.interface";
import scanComponents from "@/assets/ts/scan/scanComponent/scanComponents";

//  获取扫描组件结果
let components: scanComponentsInterface[] = scanComponents("IndexPage");
//  挂载组件
components.map((component):void => {
  let { name, component: com } = component;
  Vue.component(name, com.default);
})

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');

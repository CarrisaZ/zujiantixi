import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'

 //import Vue from 'vue';
//  import * as echarts from 'echarts'; 
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
//  import axios from 'axios'
// import VueAxios from 'vue-axios'

 //Vue.prototype.$echarts = echarts;
// Vue.use(VueAxios, axios)
// Vue.use(ElementUI);
// Vue.config.productionTip = false

const app=createApp(App)
// app.config.globalProperties.$echarts=echarts;
// app.config.globalProperties.$http=axios;
app.use(store).use(router).mount('#app')

// var vue = new Vue({
//     render: h => h(App),
//     router,
//     store,
//   })
//   vue.$mount('#app')

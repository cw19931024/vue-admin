import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import router from './router';
import store from './store';
import Antd from 'ant-design-vue';
import Moment from 'moment';
import 'moment/locale/zh-cn';
import 'ant-design-vue/dist/antd.css';
Moment.locale('zh-cn');
Vue.config.productionTip = false;
Vue.use(Antd, axios, VueAxios);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

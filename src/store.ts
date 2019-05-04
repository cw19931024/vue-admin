import Vue from 'vue';
import Vuex from 'vuex';
import Party from './store/party';
import Commodity from './store/commodity';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    Party,
    Commodity,
  }
});

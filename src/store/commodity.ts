import { ActionTree, MutationTree } from 'vuex';
import { CommodityItem, State } from '../types/commodity';
import { getData } from '../api/api';
const state: State = {
  data: []
};

const actions: ActionTree<State, any> = {
  async getCommodity({ commit }): Promise<void> {
    commit('getCommodity');
    const res = await getData('/example/commodity/list');
    commit('getCommoditySuccess', res.data);
  }
};

const mutations: MutationTree<State> = {
  getCommoditySuccess(state: State, res: CommodityItem[]): void {
    state.data = res;
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
};

import { ActionTree, MutationTree } from 'vuex';
import { PartyItem, CityItem, State } from '../types/party';
import { getData } from '../api/api';
const state: State = {
  data: [],
  city: []
};

const actions: ActionTree<State, any> = {
  async getParty({ commit }): Promise<void> {
    commit('getData');
    const res = await getData('/example/partyList');
    commit('getPartySuccess', res.data);
  },
  async getCity({ commit }): Promise<void> {
    commit('getData');
    const res = await getData('/example/citylist');
    commit('getCitySucces', res.data)
  }
};

const mutations: MutationTree<State> = {
  getPartySuccess(state: State, res: PartyItem[]): void {
    state.data = res;
  },
  getCitySucces(state: State, res: CityItem[]): void {
    state.city = res;
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
};

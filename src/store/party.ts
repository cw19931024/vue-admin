import { ActionTree, MutationTree } from 'vuex';
import { PartyItem, PartyData, State } from '../types/party';
import { getData } from '../api/api';
import axios from 'axios';
const state: State = {
  data: []
};

const actions: ActionTree<State, any> = {
  async getParty({ commit }): Promise<void> {
    commit('getData');
    const res = await getData(' https://www.easy-mock.com/mock/590493587a878d73716e22e5/example/partyList');
    commit('getPartySuccess', res.data);
  }
};

const mutations: MutationTree<State> = {
  getPartySuccess(state: State, res: PartyItem[]): void {
    state.data = res;
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
};

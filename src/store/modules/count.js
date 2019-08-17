export default {
  namespaced: true,
  state: {
    count: 5
  },
  getters: {
    count(state) {
      return state.count;
    }
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    }
  },
  actions: {
    increment: ({ commit }) => {
      setTimeout(() => {
        commit("increment");
      }, 500);
    }
  }
};

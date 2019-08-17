export default {
  namespaced: true,
  state: {
    books: []
  },
  getters: {
    books(state) {
      return state.books;
    }
  },
  mutations: {
    create(state, data) {
      state.books = data;
    }
  },
  actions: {
    create({ commit, dispatch }, data) {
      dispatch(
        "http/request",
        {
          method: "get",
          url: "/books",
          data,
          error: "error"
        },
        { root: true }
      ).then(response => {
        commit("create", response.data);
      });
    }
  }
};

export default {
  namespaced: true,
  state: {
    userId: "",
    token: ""
  },
  getters: {
    isLogin(state) {
      return Boolean(state.token);
    }
  },
  mutations: {
    create(state, data) {
      state.token = data.access_token;
      state.userId = data.user_id;
    }
  },
  actions: {
    create({ commit, dispatch }, data) {
      dispatch(
        "http/post",
        { url: "/auth/login", data, error: "message.unauthorized" },
        { root: true }
      )
        .then(response => {
          commit("create", response.data);
        })
        .catch(error => {
          dispatch("message/create", { error });
        });
    }
  }
};

import axios from "axios";

export default {
  namespaced: true,
  actions: {
    async post({ dispatch }, requests) {
      requests.method = "post";
      return dispatch("request", requests);
    },

    async request({ dispatch, rootState }, { method, url, data, error }) {
      const headers = {};
      headers["Content-Type"] = "application/json";
      if (rootState.auth.token) {
        headers["Authorization"] = `Bearer ${rootState.auth.token}`;
        headers["User-Id"] = rootState.auth.userId;
      }

      const options = {
        method,
        url: `${process.env.VUE_APP_API_URL}${url}`,
        headers,
        data,
        timeout: 15000
      };

      return axios(options)
        .then(res => res)
        .catch(err => {
          dispatch("message/create", { error: error, err }, { root: true });
        });
    }
  }
};

import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import http from "@/store/modules/http";
import auth from "@/store/modules/auth";
import book from "@/store/modules/book";
import message from "@/store/modules/message";
import count from "@/store/modules/count";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { http, auth, message, count, book },
  plugins: [
    createPersistedState({
      key: "example",
      storage: window.sessionStorage
    })
  ]
});

import Vue from "vue";
import Router from "vue-router";
import Home from "./containers/pages/Home.vue";
// store
import Store from "@/store/index.js";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./containers/pages/About.vue"),
      meta: {
        isPublic: true
      }
    },
    {
      path: "/count",
      name: "count",
      component: () => import("./containers/pages/Count.vue")
    },
    {
      path: "/login",
      name: "login",
      component: () => import("./containers/pages/Login.vue"),
      meta: {
        isPublic: true
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (
    to.matched.some(page => page.meta.isPublic) ||
    Store.getters["auth/isLogin"]
  ) {
    next();
  } else {
    next("/login");
  }
});

export default router;

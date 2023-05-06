import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
//解决连续点击同一个路由报错的问题
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => {
    err;
  });
};

const staticRoutes = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login"),
  },
  {
    path: "/notFound",
    name: "notFound",
    component: () => import("@/views/notFound"),
  },
  {
    path: "/:path(.*)*",
    component: () => import("@/views/notFound"),
    redirect: "/notFound",
  },
];
const routes = [
  {
    path: "/",
    name: "layout",
    component: () => import("@/views/index.vue"),
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("@/views/home"),
      },
    ],
  },
  ...staticRoutes,
];
const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior: () => ({ y: 0 }),
});

const whiteList = ["/login"];
router.beforeEach(async (to, from, next) => {
  const token = localStorage.getItem("token");
  if (token) {
    if (to.path === "/login") {
      // 去首页
      next("/");
    } else {
      next();
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next();
    } else {
      next("/login");
    }
  }
});

export default router;

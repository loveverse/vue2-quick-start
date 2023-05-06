import Vue from "vue";
import ElementUI from "element-ui";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Components from "./components";
import Directives from "./utils/directives";
import "@/assets/css/reset.scss";
import "element-ui/lib/theme-chalk/index.css";

Vue.config.productionTip = false;
Vue.use(ElementUI);
// 公共组件
Vue.use(Components);
// 自定义指定
Vue.use(Directives);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

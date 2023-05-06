import ComLayout from "./ComLayout";
import ComHeader from "./ComHeader";
import ComAside from "./ComAside";

export default {
  install(Vue) {
    Vue.component("ComLayout", ComLayout);
    Vue.component("ComHeader", ComHeader);
    Vue.component("ComAside", ComAside);
  },
};

// 适配各种状态
const focus = {
  inserted: function (el) {
    if (el.tagName == "INPUT") {
      el.focus();
    } else {
      el.querySelector("input") && el.querySelector("input").focus();
    }
  },
  update: function (el, binding, vnode) {
    if (el.tagName == "INPUT") {
      el.focus();
    } else {
      // inserted是插入到dom时才会触发，上面使用v-show只是隐藏，不会触发指令中的函数
      vnode.context.$nextTick(() => {
        el.querySelector("input") && el.querySelector("input").focus();
      });
    }
  },
};

export default {
  install(Vue) {
    Vue.directive("focus", focus);
  },
};

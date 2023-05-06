const state = {
  type: "",
  menu: [],

};
const mutations = {
  addType(state, data) {
    state.type = data
  },
  //配置菜单
  setMenuConfig(state, value) {
    state.menu = value;
  },
}

export default {
  namespaced: true,
  state,
  mutations,
};

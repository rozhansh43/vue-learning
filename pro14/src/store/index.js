import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: { id: 'abc321', name: 'Adam jahr'},
    categories : [
      'sustainability',
      'nature',
      'education',
      'home',
      'food',
      'community'
    ]
  },
  mutations: {},
  actions: {},
  modules: {},
});

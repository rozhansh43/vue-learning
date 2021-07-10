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
    ],
    todos: [
      {id:1 , text: '...', done: false},
      {id:2 , text: '...', done: true},
      {id:3 , text: '...', done: false}
    ]
  },
  mutations: {},
  actions: {},
  modules: {},
  getters: {
    catLength: state => {
      return state.categories.length
    },
    doneTodos : state => {
      return state.todos.filter( todo => todo.done )
    },
    activeTodosCount : (state , getters ) => {
      return state.todos.length - getters.doneTodos.length
    }
  }
});

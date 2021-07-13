import Vue from "vue"
import Vuex from "vuex"
import EventService from '@/services/EventService.js'
import * as user from '@/store/modules/user.js'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user
  },
  state: {
    user: { id: 'abc321', name: 'Adam jahr'},
    categories: [
      'sustainability',
      'nature',
      'education',
      'home',
      'food',
      'community'
    ],
    events: [
      { id: 1, title: '...', organizer: '...' },
      { id: 2, title: '...', organizer: '...' },
      { id: 3, title: '...', organizer: '...' },
      { id: 4, title: '...', organizer: '...' }
    ]
  },
  mutations: {},
  actions: {},
  modules: {},
  getters: {
    getEventById: state => id => {
      return state.events.find(event => event.id === id)
    }
  }
});

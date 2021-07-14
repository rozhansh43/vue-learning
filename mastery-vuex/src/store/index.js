import Vue from "vue"
import Vuex from "vuex"
import * as user from '@/store/modules/user.js'
import * as event from '@/store/modules/event.js'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    event
  },
  state: {
    categories: [
      'sustainability',
      'nature',
      'education',
      'home',
      'food',
      'community'
    ],
    events: [],
    eventsTotal: 0,
    event: {}
  },
  mutations: {
    ADD_EVENT ( state, event) {
      state.events.push(event)
    },
    SET_EVENTS (state, events) {
      state.events = events
    },
    SET_EVENTS_TOTAL (state, events) {
      state.events = events
    },
    SET_EVENTS (state, events) {
      state.event = event
    }
  },
  actions: {
    createEvent({ commit }, event) {
      return EventService,postEvent(event).then(() => {
        commit('ADD_EVENT', event)
      })
    },
    fetchEvents({ commit }, { perPage, page}) {
      EventService.getEvents (perPage, page)
      .then(response => {
        console.log('Total events are' + response.headers['x-total-count'])
        commit('SET_EVENTS', response.data)
      })
      .catch(error => {
        console.log('There was an error:', error.response)
      })
    },
    fetchEvent ({ commit, getters }, id) {
      var event =getters.getEventById(id)

      if (event) {
        commit('SET_EVENT', event)
      } else {
        EventService.getEvent(id)
          .then((response) => {
            commit('SET_EVENT',response.data);
          })
          .catch((error) => {
            console.log("there was an error:", error.response);
          })
      }
      
    }
  },
  modules: {},
  getters: {
    getEventById: state => id => {
      return state.events.find(event => event.id === id)
    }
  }
});

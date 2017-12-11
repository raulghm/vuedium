/* eslint-disable no-param-reassign */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    headerAlt: false,
    publishReady: false,
    publishDone: false,
    publising: false,
    edit: false,
    saveReady: false,
    saveDone: false,
    saving: false,
    save: false,
  },

  mutations: {
    setHeaderAlt(state, value) {
      state.headerAlt = value
    },
    setPublishReady(state, value) {
      state.publishReady = value
    },
    setPublishDone(state, value) {
      state.publishDone = value
    },
    setPublishing(state, value) {
      state.publishing = value
    },
    setEdit(state, value) {
      state.edit = value
    },
  },
})

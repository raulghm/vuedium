/* eslint-disable no-param-reassign */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    headerAlt: false,
    publishReady: false,
    publishDone: false,
    publishing: false,
    editing: false,
    saveReady: false,
    saveDone: false,
    saving: false,
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
    setEditing(state, value) {
      state.editing = value
    },
    setSaveReady(state, value) {
      state.saveReady = value
    },
    setSaveDone(state, value) {
      state.saveDone = value
    },
    setSaving(state, value) {
      state.saving = value
    },
  },
})

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    state: {},
    strict: (process.env.NODE_ENV !== 'production'),
  })
}
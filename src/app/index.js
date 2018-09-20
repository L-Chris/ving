import Vue from 'vue'
import App from './App'
import { createRouter } from './router'
import { createStore } from './store'

export function createApp () {
  const router = createRouter()
  const store = createStore()

  return new Vue({
    router,
    store,
    ...App
  })
}

createApp()
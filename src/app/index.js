import Vue from 'vue'
import App from './App'
import { createRouter } from './router'
import { createStore } from './store'

export async function createApp (context) {
  const router = createRouter()
  const store = createStore()

  return new Vue({
    router,
    store,
    ...App
  })
}
import { route } from 'quasar/wrappers'
import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

export default route(function () {
  const createHistory = createWebHistory
  const Router = createRouter({
    routes, 
    history: createHistory() 
  })
  return Router
})
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/LoginView.vue'
import FormularioTarea from '../views/FormView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/formulario-tarea',
      name: 'formulario-tarea',
      component: FormularioTarea
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})

export default router

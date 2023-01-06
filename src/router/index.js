import {createRouter, createWebHistory} from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import AdminView from '@/views/AdminView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import DataPage from '@/views/UserPanel/DataPage.vue'
import OpinionsPage from '@/views/UserPanel/OpinionsPage.vue'
import SuggestionsPage from '@/views/UserPanel/SuggestionsPage.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/admin',
        name: 'Admin',
        component: AdminView
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginView
    },
    {
        path: '/register',
        name: 'Register',
        component: RegisterView
    },
    {
        path: '/panel',
        name: 'Panel',
        component: DataPage
    },
    {
        path: '/opinions',
        name: 'Opinions',
        component: OpinionsPage
    },
    {
        path: '/suggestions',
        name: 'Suggestions',
        component: SuggestionsPage
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router

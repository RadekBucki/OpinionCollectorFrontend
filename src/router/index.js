import {createRouter, createWebHistory} from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import AdminView from '@/views/AdminView.vue'
import DataPage from '@/views/UserPanel/DataPage.vue'
import OpinionsPage from '@/views/UserPanel/OpinionsPage.vue'
import SuggestionsPage from '@/views/UserPanel/SuggestionsPage.vue'
import ProductsListPage from "@/views/ProductsListPage";
import ProductDetailPage from "@/views/ProductDetailPage";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView,
        props: true,
        inheritAttrs: false,
        children: [
            {
                path: '/',
                name: 'Products',
                component: ProductsListPage,
                props: true,
            },
            {
                path: '/product/:sku',
                name: 'Product',
                component: ProductDetailPage,
                props: true,
            },
            {
                path: 'admin',
                name: 'Admin',
                component: AdminView,
                props: true
            },
            {
                path: 'panel',
                name: 'Panel',
                component: DataPage,
                props: true
            },
            {
                path: 'opinions',
                name: 'Opinions',
                component: OpinionsPage,
                props: true
            },
            {
                path: 'suggestions',
                name: 'Suggestions',
                component: SuggestionsPage,
                props: true
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router

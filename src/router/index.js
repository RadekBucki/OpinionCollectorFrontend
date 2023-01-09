import {createRouter, createWebHistory} from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import AdminView from '@/views/AdminView.vue'
import DataPage from '@/views/UserPanel/DataPage.vue'
import OpinionsPage from '@/views/UserPanel/OpinionsPage.vue'
import SuggestionsPage from '@/views/UserPanel/SuggestionsPage.vue'
import ProductsListPage from "@/views/ProductsListPage";

import EditProduct from '@/views/EditProduct.vue';
import ProductsList from '@/views/ProductsList.vue';
import AddProduct from '@/views/AddProduct.vue';
import AdminProfile from '@/views/AdminProfile.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView,
        props: true,
        children: [
            {
                path: '/',
                name: 'Products',
                component: ProductsListPage,
                props: true,
            },
            {
                path: 'admin',
                name: 'Admin',
                component: AdminView,
                props: true,
                children: [
                    {
                        path: 'adminProfile',
                        name: 'AdminProfile',
                        component: AdminProfile,
                        props: true,
                    },
                    {
                        path: '/productsListAdmin',
                        name: 'ListAdmin',
                        component: ProductsList,
                        props: true,
                    },
                    {
                        path: '/editProduct/:sku',
                        name: 'EditProduct',
                        component: EditProduct,
                        props: true
                    },
                    {
                        path: '/addProduct',
                        name: 'AddProduct',
                        component: AddProduct,
                        props: true
                    }
                ]
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
            },
        ]
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router

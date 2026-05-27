import { createRouter, createWebHistory } from 'vue-router'

// import { useAuthStore } from '../stores/auth'

const routes = [

    {
        path: '/',
        component: () => import('../views/HomeView.vue')
    },

    {
        path: '/catalogo',
        component: () => import('../views/CatalogoView.vue')
    },

    {
        path: '/catalogo/:id',
        component: () => import('../views/ProductoDetalle.vue'),
        props: true
    },

    {
        path: '/login',
        component: () => import('../views/LoginView.vue')
    },

    {
        path: '/admin',
        component: () => import('../layouts/AdminLayout.vue'),
        meta: { requiresAuth: true },

        children: [

            {
                path: '',
                component: () => import('../views/admin/Dashboard.vue')
            },

            {
                path: 'productos',
                component: () => import('../views/admin/Productos.vue')
            },

            {
                path: 'nuevo',
                component: () => import('../views/admin/NuevoProducto.vue')
            }
        ]
    },

    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('../views/NotFound.vue')
    },

    {
        path: '/carrito',
        component: () => import('../views/CartView.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})



export default router
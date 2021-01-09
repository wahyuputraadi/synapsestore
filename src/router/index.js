import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import ProductDetailPage from '../views/ProductDetailPage.vue'
import Keranjang from '../views/Keranjang.vue'
import Berhasil from '../views/Berhasil.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'LandingPage',
        component: LandingPage
    },
    {
        path: '/product-detail',
        name: 'ProductDetailPage',
        component: ProductDetailPage
    },
    {
        path: '/keranjang',
        name: 'Keranjang',
        component: Keranjang
    },
    {
        path: '/berhasil-store',
        name: 'Berhasil',
        component: Berhasil
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router
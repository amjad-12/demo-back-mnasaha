import { createRouter, createWebHistory } from "vue-router";

import RestaurantsList from './pages/RestaurantsList.vue'
import AddRestaurant from './pages/AddRestaurant.vue'
import CategorysList from './pages/CategorysList.vue'
import ProductsList from './pages/ProductsList.vue'
import NotFound from './pages/NotFound.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/restaurants'},
        { path: '/restaurants', component: RestaurantsList},
        { path: '/restaurants/:resId/categorys', component: CategorysList },
        { path: '/restaurants/:resId/categorys/:catId/products', component: ProductsList },

        { path: '/addRestaurant', component: AddRestaurant},

        // { path: '/restaurants', component: RestaurantsList , children: [
        //     { path: ':resId/categorys', component: CategorysList, children: [
        //         { path: ':catId/products', component:ProductsList }
        //     ]},
        // ]},
        { path: '/:notFound(.*)', component: NotFound}
    ],
})

export default router
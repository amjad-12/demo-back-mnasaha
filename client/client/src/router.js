import { createRouter, createWebHistory } from "vue-router";

import RestaurantsList from './pages/restaurants/RestaurantsList.vue'
import AddRestaurant from './pages/restaurants/AddRestaurant.vue'
import CategorysList from './pages/categorys/CategorysList.vue'
import AddCategory from './pages/categorys/AddCategory.vue'
import ProductsList from './pages/products/ProductsList.vue'
import AddProduct from './pages/products/AddProduct.vue'
import NotFound from './pages/NotFound.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/restaurants'},
        { path: '/restaurants', component: RestaurantsList},
        
        { path: '/restaurants/:resId/categorys', component: CategorysList, children: [
            { path: ':catId/products', component: ProductsList },
        ]},
        { path: '/addRestaurant', component: AddRestaurant},
        { path: '/restaurants/:resId/categorys/addCategory', component: AddCategory},
        {path: '/restaurants/:resId/categorys/:catId/products/addProduct', component: AddProduct},

        // { path: '/restaurants', component: RestaurantsList , children: [
        //     { path: ':resId/categorys', component: CategorysList, children: [
        //         { path: ':catId/products', component:ProductsList }
        //     ]},
        // ]},
        { path: '/:notFound(.*)', component: NotFound}
    ],
})

export default router
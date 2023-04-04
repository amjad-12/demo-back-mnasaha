import { createStore } from 'vuex';

import restaurantsModule from './modules/restaurants/index.js'
import categorysModule from './modules/categorys/index.js'
import productsModule from './modules/products/index.js'

const store = createStore({
    modules: {
        restaurants:  restaurantsModule,
        categorys: categorysModule,
        products: productsModule
    }
})

export default store;
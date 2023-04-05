export default {
    products(state) {
        return state.products;
    },
    hasProducts(state) {
        return state.products && state.products.length > 0;
    }
    // hasRestaurants(state) {
    //     return state.restaurants && state.restaurants.length > 0;
    // }
}
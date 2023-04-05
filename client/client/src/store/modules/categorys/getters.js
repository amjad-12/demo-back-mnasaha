export default {
    categorys(state) {
        return state.categorys;
    },
    hasCategorys(state) {
        return state.categorys && state.categorys.length > 0;
    }
    // hasRestaurants(state) {
    //     return state.restaurants && state.restaurants.length > 0;
    // }
}
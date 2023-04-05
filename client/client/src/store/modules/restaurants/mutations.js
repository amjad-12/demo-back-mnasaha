export default {
    addRestaurant(state, payload) {
        state.restaurants.push(payload)
    },
    setRestaurants(state, payload) {
        state.restaurants = payload
    }
}
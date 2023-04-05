export default {
    addProduct(state, payload) {
        state.products.push(payload)
    },
    setProducts(state, payload) {
        state.products = payload
    }
}
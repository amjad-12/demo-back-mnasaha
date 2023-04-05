export default {
    addCategory(state, payload) {
        state.categorys.push(payload)
    },
    setCategorys(state, payload) {
        state.categorys = payload
    }
}
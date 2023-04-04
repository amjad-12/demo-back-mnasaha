import mutations from './mutations.js';
import actions from './actions.js'
import getters from './getters.js'
 
export default {
    namespaced: true,
    state() {
        return {
            products: [
                {
                    "id":"p1",
                    "name":"ice coffee",
                    "price":500,
                    "image":"lpokj",
                    "description":"very delicious"
                },
                {
                    "id":"p2",
                    "name":"tea",
                    "price":500,
                    "image":"lpokj",
                    "description":"very delicious"
                }
            ] 
            
        }
    },
    mutations,
    actions,
    getters
}
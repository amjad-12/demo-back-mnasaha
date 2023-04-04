import mutations from './mutations.js';
import actions from './actions.js'
import getters from './getters.js'
 
export default {
    namespaced: true,
    state() {
        return {
            categorys: [
                {
                    "id":"c1", 
                    "name":"drinks",
                    "image":"lpokj",
                    "restaurantId":{"name":"5pax","image":"lpokj"},
                },
                {
                    "id":"c2", 
                    "name":"fast foods",
                    "image":"lpo",
                    "restaurantId":{"name":"6pax","image":"lpokj"},
                }
            ] 
            
        }
    },
    mutations,
    actions,
    getters
}
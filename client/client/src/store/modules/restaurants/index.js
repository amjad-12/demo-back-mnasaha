import mutations from './mutations.js';
import actions from './actions.js'
import getters from './getters.js'
 
export default {
    namespaced: true,
    state() {
        return {
            restaurants: [
                {
                    id: 'r1',
                    name: '4pax',
                    description: 'best in banias',
                    stars: '3',
                    image: '5555'
                },
                {
                    id: 'r2',
                    name: '5pax',
                    description: 'best in syria',
                    stars: '5',
                    image: '5555'
                },
            ]
        }
    },
    mutations,
    actions,
    getters
}
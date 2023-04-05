import axios from "axios";
export default {
    async addRestaurant(context, data) {
        const restaurantData = {
            name: data.name,
            description: data.description,
            stars: data.stars,
            image: data.image
        };

        const response = await axios.post('/api/restaurants/', restaurantData);

       // const responseData = await response.json

        if (!response.ok) {
            //error
        }



        context.commit('addRestaurant', {
            ...restaurantData
        })
    },
    async loadRestaurants(context) {
        const response = await axios.get('/api/restaurants/');
        const responseData = response.data

        if (!response.ok) {
            // ...
        }

        const restaurants = responseData;
        
        context.commit('setRestaurants', restaurants)
    }
}
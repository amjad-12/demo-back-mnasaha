import axios from "axios"

export default {
    async addCategory(context, data) {
        const categoryData = {
            name: data.name,
            image: data.image,
        }

        const response = await axios.post(`/api/restaurants/${data.restaurantId}/categorys/`, categoryData)

        
        if (!response.ok) {
            //error
        }

        context.commit('addCategory', {
            ...categoryData
        })
    },
    async loadCategorys(context, data) {
        const response = await axios.get(`/api/restaurants/${data.restaurantId}/categorys/`)
        const responseData = response.data

        if (!response.ok) {
            // error
        }

        const categorys = responseData

        context.commit('setCategorys', categorys)

    }
}
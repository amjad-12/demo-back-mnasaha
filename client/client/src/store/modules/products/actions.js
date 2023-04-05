import axios from "axios"

export default {
    async addProduct(context, data) {
        const productData = {
            name: data.name,
            description: data.description,
            price: data.price,
            image: data.image,
            // categoryId: data.categoryId
        }

        // const response = await axios.post(`/api/restaurants/${data.restaurantId}/categorys/${data.categoryId}/products/`, productData)
        const response = await axios.post(`/api/restaurants/${data.restaurantId}/categorys/${data.categoryId}/products/`, productData)

        if (!response.ok) {
            // 
        }

        context.commit('addProduct', {
            ...productData
        })
    },
    async loadProducts(context, data) {
        const response = await axios.get(`/api/restaurants/${data.restaurantId}/categorys/${data.categoryId}/products/`)
        const responseData = response.data

        const products = responseData

        context.commit('setProducts', products)
    }
}
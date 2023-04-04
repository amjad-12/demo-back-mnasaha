<template>
    <base-card>
        <product-item 
            v-for="product in productsData" 
            :key="product.id"
            :name="product.name"
            :price="product.price"
            :description="product.description"
        ></product-item>
    </base-card>
</template>

<script>
import ProductItem from '../components/ProductItem.vue'

export default {
    components: {
        ProductItem
    },
    computed: {
        productsData() {
            return this.$store.getters['products/products']
        }
    }
}
</script>
<template>
    <base-card>
    <div class="controls">
        <base-button link :to="this.$route.path + '/addProduct'">أضف منتج</base-button>
        </div>
        <product-item 
        v-for="product in productsData" 
        :key="product._id"
        :name="product.name"
        :price="product.price"
        :description="product.description"
        ></product-item>
    </base-card>
</template>

<script>
import ProductItem from '../../components/products/ProductItem.vue'

export default {
    data() {
        return {
            ids: {
                restaurantId: this.$route.params.resId,
                categoryId: this.$route.params.catId
            }
        }
    },
    components: {
        ProductItem
    },
    computed: {
        productsData() {
            return this.$store.getters['products/products']
        }
    },
    created() {
        this.loadProducts(this.ids)
    },
    methods: {
        loadProducts(data) {
            this.$store.dispatch('products/loadProducts', data)
        }
    }
}
</script>

<style scoped>
.controls {
  display: flex;
  justify-content: center;
}
</style>
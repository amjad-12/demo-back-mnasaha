<template>
    <section>
        <base-card>
        <h2>أضف صنف من مطعمك!</h2>
        <product-form @save-data="saveData"></product-form>
    </base-card>
    </section>
</template>


<script>
import ProductForm from '../../components/products/ProductForm.vue';

export default {
    components: {
        ProductForm
    },
    methods: {
        saveData(data) {
            this.$store.dispatch('products/addProduct', data)
            this.$router.back()
        }
    }
}
</script>

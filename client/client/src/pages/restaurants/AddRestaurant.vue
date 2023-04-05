<template>
    <section>
        <base-card>
        <h2>أضف مطعمك الآن!</h2>
        <restaurant-form @save-data="saveData"></restaurant-form>
    </base-card>
    </section>
</template>


<script>
import RestaurantForm from '../../components/restaurants/RestaurantForm.vue';

export default {
    components: {
        RestaurantForm
    },
    methods: {
        saveData(data) {
            this.$store.dispatch('restaurants/addRestaurant', data)
            this.$router.back()
        }

    }
}
</script>

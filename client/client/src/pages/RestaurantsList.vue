<template>
    <div>
        <base-card>
            <div class="controls">
                <base-button mode="outline">تحديث</base-button>
                <base-button link to="/addRestaurant">أضف مطعمك</base-button>
            </div>
            <ul v-if="hasRestaurants">
                <restaurant-item 
                    v-for="restaurant in restaurantsList" 
                    :key="restaurant.id" 
                    :id="restaurant.id"
                    :name="restaurant.name"
                    :description="restaurant.description"
                    :stars="restaurant.stars"
                    :image="restaurant.image"
                ></restaurant-item>
            </ul>
            <h3 v-else>No Restaurants found</h3>
        </base-card>
    </div>
</template>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>

<script>
import RestaurantItem from '../components/RestaurantItem.vue';
import BaseButton from '../components/ui/BaseButton.vue';

export default {
    components: {
        RestaurantItem,
        BaseButton
    },
    computed: {
        restaurantsList() {
            return this.$store.getters['restaurants/restaurants']
        },
        hasRestaurants() {
            return this.$store.getters['restaurants/hasRestaurants']
        }
    }
}
</script>
<template>
    <section class="container">
        <h3 v-if="!hasCategorys">لا يوجد أصناف بعد</h3>
        <base-card-category class="centerize">
            <base-button class="centerizeItem" link :to="'/restaurants/'+ this.$route.params.resId + '/categorys/addCategory'">أضف صنف</base-button>
            <div class="centerizeItem" v-for="category in categorysData" :key="category._id">
                <base-button link :to="'/restaurants/' + category.restaurantId._id + '/categorys' + '/' + category._id + '/products' ">{{ category.name }}</base-button>
            </div>
        </base-card-category>
        <div class="products">
            <router-view :key="this.$route.path"></router-view>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            restaurantId: { restaurantId: this.$route.params.resId }
        }
    },
    computed: {
        categorysData() {
            return this.$store.getters['categorys/categorys']
            
        },  
        hasCategorys() {
            return this.$store.getters['categorys/hasCategorys']
        }
    },
    created() {
        this.loadCategorys(this.restaurantId)
    },
    methods: {
        loadCategorys(data) {
            this.$store.dispatch('categorys/loadCategorys', data)
        }
    }
}
</script>

<style scoped>
.container {
    display: grid;
    justify-content: center;
}

.products {
    justify-self: center;
}

.centerize {
    margin-top: 7px;
    justify-self: center;
}

.centerizeItem {
    justify-self: center;
}
</style>
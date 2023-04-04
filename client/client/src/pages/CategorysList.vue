<template>
    <section>
        <base-card class="centerize">
            <div class="centerizeItem" v-for="category in categorysData" :key="category.id">
                <base-button link :to="this.$route.path + '/' + category.id + '/products'">{{ category.name }}</base-button>
            </div>
        </base-card>
    </section>
</template>

<script>
export default {
    computed: {
        categorysData() {
            return this.$store.getters['categorys/categorys']
        }
    }
}
</script>

<style scoped>
.centerize {
    display: grid;
    gap: 10px;
    justify-content: center;
}

.centerizeItem {
    justify-self: center;
}
</style>
<template>
    <section>
        <base-card>
        <h2>أضف صنف من مطعمك!</h2>
        <category-form @save-data="saveData"></category-form>
    </base-card>
    </section>
</template>


<script>
import CategoryForm from '../../components/categorys/CategoryForm.vue';

export default {
    components: {
        CategoryForm
    },
    methods: {
        saveData(data) {
            this.$store.dispatch('categorys/addCategory', data)
            this.$router.back()
        }
    }
}
</script>
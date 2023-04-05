<template>
    <form @submit.prevent="submitForm">
        <div class="form-control">
            <label for="name">إسم المنتج</label>
            <input type="text" id="name" v-model.trim="name">
        </div>
        <div class="form-control">
            <label for="description">نبذه عن المنتج</label>
            <textarea id="description" rows="3" v-model.trim="description"></textarea>
        </div>
        <div class="form-control">
            <label for="price">السعر</label>
            <input type="number" id="price" v-model.number="price">
        </div>
        <div class="form-control">
            <label for="image">صوره عن المنتج</label>
            <input type="text" id="image" v-model="image">
        </div>
        <base-button>تأكيد</base-button>
    </form>
</template>

<script>
export default {
    emits: ['save-data'],
    data() {
        return {
            name: '',
            description: '',
            price: null,
            image: ''
        }
    },
    methods: {
        submitForm() {
            const formData = {
                name: this.name,
                description: this.description,
                price: this.price,
                image: this.image, 
                categoryId: this.$route.params.catId,
                restaurantId: this.$route.params.resId
            };

            this.$emit('save-data', formData)
        }
    }
}
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
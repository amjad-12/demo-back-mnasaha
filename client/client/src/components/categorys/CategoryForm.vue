<template>
    <form @submit.prevent="submitForm">
        <div class="form-control">
            <label for="name">إسم الصنف</label>
            <input type="text" id="name" v-model.trim="name">
        </div>
        <div class="form-control">
            <label for="image">صوره عن الصنف</label>
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
            image: ''
        }
    },
    methods: {
        submitForm() {
            const formData = {
                name: this.name,
                image: this.image,
                restaurantId: this.$route.params.resId
            };

            console.log(formData)
            this.$emit('save-data', formData);
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
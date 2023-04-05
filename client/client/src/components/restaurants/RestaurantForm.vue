<template>
    <form @submit.prevent="submitForm">
        <div class="form-control" :class="{invalid: !name.isValid}">
            <label for="name">إسم المنشأه</label>
            <input type="text" id="name" v-model.trim="name.val" @blur="clearValidity('name')">
            <p v-if="!name.isValid">أدخل على الأقل 3 أحرف</p>
        </div>
        <div class="form-control" :class="{invalid: !description.isValid}">
            <label for="description">نبذه عن المنشأه</label>
            <textarea id="description" rows="5" v-model.trim="description.val" @blur="clearValidity('description')"></textarea>
            <p v-if="!description.isValid">أدخل على الأقل 3 أحرف</p>
        </div>
        <div class="form-control" :class="{invalid: !stars.isValid}">
            <label for="stars">تصنيف النجوم</label>
            <input type="number" id="stars" v-model.number="stars.val" @blur="clearValidity('stars')">
            <p v-if="!stars.isValid">أدخل إما صفر أو أكثر</p>
        </div>
        <div class="form-control" :class="{invalid: !image.isValid}">
            <label for="image">صوره للمنشأه</label>
            <input type="text" id="image" v-model="image.val" @blur="clearValidity('image')">
            <p v-if="!image.isValid">أضف صورة من فضلك</p>
        </div>
        <p v-if="!formIsValid">فضلاً أدخل بيانات صحيحه، شكراً</p>
        <base-button>تأكيد</base-button>
    </form>
</template>

<script>
export default {
    emits: ['save-data'],
    data() {
        return {
            name: {
                val: '',
                isValid: true
            },
            description: {
                val: '',
                isValid: true
            },
            stars: {
                val: null,
                isValid: true
            },
            image: {
                val: '',
                isValid: true
            },
            formIsValid: true
        }
    },
    methods: {
        clearValidity(input) {
            this[input].isValid = true
        },
        validateForm() {
            this.formIsValid = true;
            if (this.name.val === '') {
                this.name.isValid = false;
                this.formIsValid = false
            }
            if (this.description.val === '') {
                this.description.isValid = false;
                this.formIsValid = false
            }
            if (!this.stars.val || this.stars.val < 0) {
                this.stars.isValid = false;
                this.formIsValid = false
            }
            if (!this.image.val) {
                this.image.isValid = false;
                this.formIsValid = false
            }
        },
        submitForm() {
            this.validateForm();

            if (!this.formIsValid) {
                return;
            }

            const formData = {
                name: this.name.val,
                description: this.description.val,
                stars: this.stars.val,
                image: this.image.val 
            };
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
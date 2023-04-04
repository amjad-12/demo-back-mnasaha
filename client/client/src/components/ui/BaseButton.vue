<template>
    <div>
        <button v-if="!link" :class="mode">
            <slot></slot>
        </button>
        <router-link v-else :to="to" :class="mode">
            <slot></slot>
        </router-link>
    </div>
</template>

<script>
export default {
    props: {
        mode: {
            type: String,
            required: false,
            defautl: null
        },
        link: {
            type: Boolean,
            required: false,
            defautl: false
        },
        to: {
            type: String,
            required: false,
            defautl: false
        }
    }
}
</script>

<style scoped>
button,
a {
  text-decoration: none;
  padding: 0.75rem 2rem;
  font: inherit;
  background-color: #fa7d1e;
  /* border: 1px solid #3a0061; */
  color: white;
  cursor: pointer;
  border-radius: 30px;
  margin-right: 0.5rem;
  display: inline-block;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: #d9660d;
  /* border-color: #270041; */
}

.flat {
  background-color: transparent;
  /* color: #3a0061; */
  border: none;
}

.outline {
  background-color: transparent;
  border-color: #fa7d1e;
  color: #fa7d1e;
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: #f0680049;
}
</style>
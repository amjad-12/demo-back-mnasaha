<template>
    <router-link class="badge" :to="to">
        {{ name }}
    </router-link>
</template>

<script>
export default {
    props: ['name', 'to']
}
</script>

<style scoped>
.badge {
  background-color: #ccc;
  color: #252525;
  border-radius: 30px;
  padding: 0.5rem 1.5rem;
  display: inline-block;
  margin-right: 0.5rem;
  background-color: #8d006e;
  color: white;
  text-decoration: none;
}

.frontend {
}

/* .backend {
  background-color: #71008d;
  color: white;
}

.career {
  background-color: #8d006e;
  color: white;
} */
</style>
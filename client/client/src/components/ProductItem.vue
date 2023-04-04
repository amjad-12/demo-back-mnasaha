<template>
    <ul>
        <li>
            <div class="info">
                <h3>{{ name }}</h3>
                <h4>{{ description }}</h4>
                <h5 class="price">{{ price }}</h5>
            </div>
        </li>
    </ul>
</template>

<script>
export default {
    props: ['id', 'name', 'image', 'description', 'price'],
}
</script>

<style scoped>
.price {
    background-color: #fa7d1e;
    border-radius: 10px;
    padding: 7px 20px;
    color: white;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
  color: rgb(77, 77, 77);

}

h3 {
  font-size: 1.5rem;
  align-self: center;
  justify-self: end;
}

h4 {
  font-size: 1rem;
  align-self: center;
  justify-self: end;
}

h5 {
  font-size: 1rem;
  align-self: center;
  justify-self: end;
}

/* h3,
h4 {
  margin: 0.5rem 0;
} */

div {
  margin: 0.5rem 0;
}

.info {
    display: grid;
    justify-content: end;
    align-content: center;
    grid-template-rows: repeat(3, 40px);
    padding-right: 20px;
}


</style>
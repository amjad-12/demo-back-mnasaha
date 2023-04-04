<template>
    <li>
        <div class="info">
            <h3>{{ name }}</h3>
            <h4>{{ description }}</h4>
            <h5>{{ starsNumber }}</h5>
        </div>
        <div class="actions">
            <base-button link :to="RestaurantCategorysLink">قائمة الطعام</base-button>
        </div>
    </li>
</template>

<script>
export default {
    props: ['id', 'name', 'image', 'description', 'stars'],
    computed: {
        RestaurantCategorysLink() {
            return this.$route.path + '/' + this.id + '/categorys'
            // return '/restaurants/' + this.id + 'categorys'
        },
        starsNumber() {
          const shape = '⭐'
          const finalShape = shape.repeat(2)
          return finalShape
        }
    }
}
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;

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

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>
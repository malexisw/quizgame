<template>
    <div class="categories">
      <router-link :to="{name:'Questions', params:{category} }" class="category" v-for="(category,index) in categories" :key="index">
        {{ category }}
      </router-link>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'Categories',
    computed:{
    ...mapGetters({
      categories: 'getCategories'
    })
  }
}
</script>

<style scoped>
.categories{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;

  padding: 5% 5%;
  color: #000;
}

.category{
  min-width: 20%;
  height: 100px;

  line-height: 100px;

  margin: 10px;

  text-align: center;
  border-radius: 10px;
  background: rgb(228, 228, 228);
  box-shadow: 0px 0px 10px #000;

  transition: .15s ease-in;

  opacity: 0;

  animation: fadeIn .5s 1s forwards;
}

.category:hover{
  background: rgb(61, 57, 57);
  color: #fff;
}

a{
  text-decoration: none;
  color: inherit;
}

@media only screen and (max-width: 800px) {
  .category{
    min-width: 40%;
  }
}

@keyframes fadeIn {
  to{
    opacity: 1;
  }
}

</style>
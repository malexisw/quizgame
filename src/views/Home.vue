<template>
  <div class="home">
    <header>
      <h1 class="title">
        Quiz
      </h1>
    </header>
    
    <Categories />
    
  </div>
</template>

<script>
import Categories from '../components/Categories.vue'

export default {
  name: 'Home',
  components: {
    Categories
  }
}
</script>


<style scoped>
.home{
  min-height: 100vh;
  height: 100%;
}

header{
  padding: 5% 5%;
}

h1{
  cursor: default;

  position: relative;
  font-size: 9em;
  font-weight: 900;

  color: #000;

  text-align: center;
  text-transform: uppercase;
}

.title{
  transform: translateY(-500%);

  animation: slide-down .5s ease-out forwards;
}

@keyframes slide-down {
  to{
    transform: translateY(0);
  }
}

@keyframes slide-down-delay {
  to{
    transform: translate(-50%,0);
  }
}

.title::after{
  content: 'Quiz';

  position: absolute;
  left: 50%;
  top: 35px;

  color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;

  transform: translate(-50%,-35px);

  animation: slide-down-delay .5s .4s ease-out forwards;
}

.title::before{
  content: 'Quiz';

  position: absolute;
  left: 50%;
  top: 70px;
  
  color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;

  transform: translate(-50%,-70px);

  animation: slide-down-delay .5s .4s ease-out forwards;
}

@media only screen and (max-width: 800px) {
  h1{
    font-size: 5em;
  }

  header{
    margin-bottom: 10%;
  }
}

</style>

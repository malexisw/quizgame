<template>
  <div id="app">
    <router-view/>
    <Loader v-if="load" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Loader from './components/Loader.vue'

export default {
  components:{
    Loader
  },
  computed:{
    ...mapGetters({
      load: 'getLoading'
    })
  }  
}
</script>

<style>
:root{
  font-size: 16px;
  font-weight: normal;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1,6em;
}

*{
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  list-style: none;
}

#app{
  background: rgb(204, 203, 203);
  color: rgb(53, 53, 53);
}

</style>

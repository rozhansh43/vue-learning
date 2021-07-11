<template>
  <div>

    <div class="content">

      <h1 class="title">
          Coffee plans
      </h1>
      <p>
        {{ like }}
      </p>
      <h2 class="subtitle">
          we travel the world
      </h2>

      <!-- <AddItem/> -->
    
      <Items />
      </div>

      <button @click="like++">
        {{ like }}
      </button>

    <!-- <new v-model="model" @add="add"/>
    <items :value="items"/> -->
    
  </div>
</template>

<script>
import Items from '@/components/Items'

export default {
  components: {
    Items,

  },
  name: 'Home',
  data () {
    return { 
      // Items
      model: {
        id: null,
        name: null
      },
      like: 0,
    }
  },
  props: {
    name: {
        type: String,
        required: true
    },
  }
}
</script>


<style>

body {
    height: 100vh;
    -webkit-font-smoothing: auto;
    -moz-osx-font-smoothing: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: Roboto, sans-serif;
    background-color: #ccdcdc;
    background-image: url("coffee.jpg");
    background-repeat: no-repeat;
    background-position: 100% 100%;
    text-align: center;
}

</style>

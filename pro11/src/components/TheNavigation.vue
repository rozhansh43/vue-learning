<template>
    <nav id="nav"> 
        <p>the vue travel app</p>
       <ul class="nav-links">
           <li class="links">
               <router-link to="/">
               Home
               </router-link>
           </li>
           <li
            v-for:="destination in destinations" 
           :key="destination.name"
           class="links">
               <router-link 
               :to="{
                   name: 'DestinationDetails',
                   params:{id:destination.id}
               }">
               {{ destination.name }}
               </router-link>
           </li>
       </ul>
    </nav>
</template>

<script>
import store from "@/store.js";
export default{
    data(){
        return{
            destinationId: this.$route.params.id,
            destinations:store.destinations,
        }
    }
}
</script>

<style scoped>
#nav{
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
<template>
    <div>
        <h1>
            Create an Event {{ user.name }}
        </h1>
        <p>
            this was created by {{ user.id }}
        </p>
        
        <p>
            there are {{ catLength }} categories
        </p>

        <ul>
            <li v-for="cat in categories" :key="cat"> 
                {{ cat }}
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    computed: {
        catLength() {
            return this.$store.getters.catLength
        },
        ...mapState(['user', 'categories'])
    }
}
</script>

<style scoped>

</style>
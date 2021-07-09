<template>
    <div>
        <h1>
           showing Event #{{ event.title }}
        </h1>
    </div>
</template>

<script>
import EventService from '@/services/EventService.js'
export default {
    props: ["id"],
    data () {
        return {
            event: {}
        }
    },
    created () {
        EventService.getEvent (this.id)
        .then( response => {
            this.event = response.data
        })
        .catch ( error => {
            console.log ('there was an error:' , error.response)
        })
    }
}
</script>

<style scoped>

</style>
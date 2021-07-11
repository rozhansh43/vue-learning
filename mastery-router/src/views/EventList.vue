<template>
  <div>
    <h1>
      Event Listing
    </h1>

    <EventCard v-for="event in events" :key="event.id" :event="event"/>

    <BaseIcon />

    <MediaBox>

      <h2 slot="heading">
        Adam j
      </h2>

      <template>

        <p slot="paragraph">
          My words
        </p>

        <BaseIcon name="book" />

      </template>

    </MediaBox>
  </div>
</template>

<script>
import EventCard from "@/components/EventCard.vue"
import EventService from '@/services/EventService.js'
import BaseIcon from '../components/BaseIcon.vue'
export default {
  components: {
    EventCard,
    BaseIcon,
  },
  data() {
    return {
      events: []
    }
  },
  created() {
    EventService.getEvents()
    .then(response => {
      this.events = response.data
    })
    .catch(error => {
      console.log('There was an error:', error.response)
    })
  }
}
</script>

<style scoped></style>

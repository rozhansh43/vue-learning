<template>
  <div>
    <h1>
      Events for {{ user.user.name }}
    </h1>

    <EventCard v-for="event in event.events" :key="event.id" :event="event"/>
    <template v-if="page != 1">
      <router-link :to="{ name: 'event-list', query: { page: page - 1 }}" rel="prev">
        Prev page
      </router-link> |
    </template>
    <router-link :to="{ name: 'event-list', query: { page: page - 1 }}" rel="next">
      Next page
    </router-link> 

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
import { mapState } from 'vuex'
import BaseIcon from '../components/BaseIcon.vue'
export default {
  components: {
    EventCard,
    BaseIcon,
  },
  created() {
    this.$store.dispatch('event/fetchEvents', {
      perPage: 3,
      page: this.page
    })
  },
  computed: {
    page () {
      return parseInt(this.$route.query.page) || 1
    },
    hasNextPage() {
      return this.event.eventsTotal > this.page * this.perPage
    },
    ...mapState([ 'events', 'user'])
  }
}
</script>

<style scoped></style>

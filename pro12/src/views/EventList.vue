<template>
  <div>
    <h1>Event Listing</h1>

    <EventCard />
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
import EventCard from "@/components/EventCard.vue";
import BaseIcon from '../components/BaseIcon.vue';
export default {
  components: {
    EventCard,
    BaseIcon,
  },
};
</script>

<style scoped></style>

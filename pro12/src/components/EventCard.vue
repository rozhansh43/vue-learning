<template>
  <div>
    <router-link class="event-link" :to="{ name: 'event-show', params: { id: 1 } }">
      <div class="event-card -shadow">
        <span> @{{ events.time }} on {{ events.date }} </span>

        <h4 class="title">
          {{ events.title }}
        </h4>

        <BaseIcon name="users" />

        <span> {{ events.attendees.length }} attending </span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      events: {
        id: 1,
        title: "park cleanup",
        date: "tues aug 19 , 2018 ",
        time: "5:00",
        attendees: [
          { id: "abc123", name: "Adam jahr" },
          { id: "edrf89", name: "gregg poli" },
        ],
      },
    };
  },
};
</script>

<style scoped>
.event-card {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.event-card > .title {
  margin: 0;
}
.event-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}
</style>

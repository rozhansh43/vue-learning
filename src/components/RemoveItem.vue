<template>
  <div>
    <button @click="$emit('remove')">
      delete
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    // removeItem: function (index) {
    // this.items.splice(index, 1);
    // },
  }
}
</script>
<template>
  <div>
    <button type="text" @click="likeCounter">
       {{ like }}
    </button> 
  </div>
</template>

<script>
export default {
  data() {
    return {
    like: 0,
    }
  },
  methods: {
      likeCounter() {
      this.like ++
    },
  },
}
</script>
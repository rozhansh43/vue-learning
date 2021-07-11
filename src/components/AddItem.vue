<template>
  <div>
    <form>
      {{ newitem }}
      <input v-model="newitem" @keyup.enter="increaseitem">

      <button @click.prevent="increaseitem" @click="$emit('increase')">
          insert
      </button>

      <p>
        {{ text }}
      </p>

      <ul>
        <li v-for="item in items" :key="item.id">
      {{ parentData.name }}
        </li>
      </ul>
      
    </form>
  </div>
</template>

<script>
export default {
  props: ['itemDetails','text'],
  data() {
    return {
      parentData: this.$parent.items,
    }
  },
  methods: {
  
  }
}
</script>
new Vue ({
  el: '#vue-app',
  data: {
    name: 'shaun',
    age: 25,
    x: 0,
    y: 0,
  },
  methods: {
    add(inc) {
      this.age += inc
    },
    subtract(dec) {
      this.age += dec
    },
    updateXY(event) {
      this.Y = event.offsetX,
      this.y = event.offsetX
    }
  }
})
Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Whatever else humans are supposed to eat' }
    ]
  }
})

Vue.component('vegetable-item',{
props:['todo'],
template:`<li>{{ todo.text }}</li>`
})
var app6 = new Vue({
  el: '#app-6',
  data:{
    list : [
      { id:0, text:'vegetables'},
      { id:1 , text:'cheese'},
      { id:2, text:'fish'}
    ]
  }
})
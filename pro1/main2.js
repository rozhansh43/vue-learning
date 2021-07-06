var app = new Vue({
  el:'#app',
})


Vue.component('button-counter', {
  template: '<h2>{{ message }}</h2>',
  data: function () {
    return {
      message:'some text'
    }
  },
})


Vue.component('blog-post', {
  props: ['title'],
  template: '<h3>{{ title }}</h3>'
})
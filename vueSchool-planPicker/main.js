Vue.config.devtools = true

Vue.component('plan', {
    template: '#plan-template',

    props: ['name']
})

var App = new Vue({
    el: '#app'
})
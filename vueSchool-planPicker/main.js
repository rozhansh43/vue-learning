Vue.config.devtools = true

Vue.component('plan', {
    template: '#plan-template',

    props: {
        name: {
            type: String,
            required: true
        },
    }
})

var App = new Vue({
    el: '#app',
    data: {
        plans: ['The Addict', 'The Curious', 'The Hacker'],
        image: {
            title: 'coffee',
            src: 'coffee.jpg'
        }
    }
})
Vue.config.devtools = true

Vue.component('plan', {
    template: '#plan-template',
    data() {
        return {
            plans: ['The Addict', 'The Curious', 'The Hacker'],
            image: {
                title: 'coffee',
                src: 'coffee.jpg'
            },
            like: 0,
        }
    },
    props: {
        name: {
            type: String,
            required: true
        },
        like: 0,
    }
})

Vue.component('likeButton', {
    template: '#likeButton',
})

var App = new Vue({
    el: '#app',
    methods: {
        likeCounter() {
            this.like += 1
        }
    },
})
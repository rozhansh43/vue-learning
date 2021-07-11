Vue.config.devtools = true

Vue.component('plan', {
    template: '#plan-template',

    props: {
        name: {
            type: String,
            required: true
        },
        like: 0,
        test: {
            type: String,
            requried: true
        }
    }
})

Vue.component('likeButton', {
    template: '#likeButton',
})

var App = new Vue({
    el: '#app',
    data: {
        plans: ['The Addict', 'The Curious', 'The Hacker'],
        image: {
            title: 'coffee',
            src: 'coffee.jpg'
        },
        like: 0,
    },
    methods: {
        likeCounter() {
            this.like += 1
        }
    }
})
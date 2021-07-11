Vue.config.devtools = true

Vue.component('plan-picker', {
    template: '#plan-picker-template',
    data() {
        return {
            plans: ['The Addict', 'The Curious', 'The Hacker'],
            image: {
                title: 'coffee',
                src: 'coffee.jpg'
            }
        }
    }

})

Vue.component('plan', {
    template: '#plan-template',

    props: {
        name: {
            type: String,
            required: true
        },
    }
})

new Vue({
    el: '#app'
})
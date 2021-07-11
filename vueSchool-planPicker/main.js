Vue.config.devtools = true

Vue.component('plan', {
    template: '#plan-template',

    props: ['name']
})

var App = new Vue({
    el: '#app',
    data: {
        plans: ['The Addict', 'The Curious', 'The Hacker']
    }
})
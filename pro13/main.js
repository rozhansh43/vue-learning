var app = new Vue({
    el: '#app',
    data: {
        product: 'socks',
        image: {
            src: './assets/images/socks_green.jpg',
            name: 'socks'
        },
        inventory: 2,
        details: ['cotton', 'polyester', 'gender-nuteral'],
        varients: [{
                varientId: 3435,
                varientColor: 'green'
            },
            {
                varientId: 4343,
                varientColor: 'blue'
            }
        ]
    }
})
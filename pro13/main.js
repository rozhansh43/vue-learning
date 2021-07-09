Vue.config.devtools = true;

var app = new Vue({
    el: '#app',
    data: {
        product: 'socks',
        name: 'socks',
        brand: 'Vue',
        inventory: 2,
        inStock: true,
        image: './assets/images/socks_green.jpg',
        details: ['cotton', 'polyester', 'gender-nuteral'],
        varients: [{
                varientId: 3435,
                varientColor: 'green',
                varientImage: './assets/images/socks_green.jpg',
            },
            {
                varientId: 4343,
                varientColor: 'blue',
                varientImage: './assets/images/socks_blue.jpg',
            }
        ],
        cart: 0,
    },
    methods: {
        AddToCart() {
            this.cart += 1
        },
        updateProduct(varientImage) {
            this.image = varientImage
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        }
    }
})
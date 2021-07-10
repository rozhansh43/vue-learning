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
        variants: [{
                variantId: 3435,
                variantColor: 'green',
                variantImage: './assets/images/socks_green.jpg',
            },
            {
                variantId: 4343,
                variantColor: 'blue',
                variantImage: './assets/images/socks_blue.jpg',
            }
        ],
        cart: 0,
    },
    methods: {
        AddToCart() {
            this.cart += 1
        },
        updateProduct(variantImage) {
            this.image = variantImage
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        }
    }
})
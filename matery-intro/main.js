var eventBus = new Vue()

Vue.config.devtools = true;

Vue.component ('product', {
    props: {
        premium: {
            type:Boolean,
            required: true
        }
    },
    template: '#product',
    data() {
        return{
        product: 'socks',
        name: 'socks',
        brand: 'Vue',        
        selectedVariant: 0,
        details: ['cotton', 'polyester', 'gender-nuteral'],
        variants: [{
                variantId: 3435,
                variantQuantity : 0,
                variantColor: 'green',
                variantImage: './assets/images/socks_green.jpg',
            },
            {
                variantId: 4343,
                variantQuantity : 10,
                variantColor: 'blue',
                variantImage: './assets/images/socks_blue.jpg',
            }
        ],
        reviews: []
        }
    },
    methods: {
        AddToCart() {
            this.$emit('add-to-cart',this.variants[this.selectedVariant].variantId)
        },
        updateImage(index) {
            this.selectedVariant = index
            console.log(index)
        },

    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image(){
            return this.variants[this.selectedVariant].variantImage
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity
        },
        shipping() {
            if (this.premium) {
                return 'Free'
            }
            return 3.99
        },
        mounted() {
            eventBus.$on('review-submitted', productReview => {
                this.reviews.push(productReview)
            })
        }
    }
})

Vue.component('product-review', {
    template: '#product-review',
    data() {
        return {
            name: null,
            review: null,
            rating: null,
            errors: []
        }
    },
    methods: {
        onSubmit() {
            if( this.name && this.rating && this.review ) {
                let productReview = {
                    name: this.name,
                    review: this.review,
                    rating: this.rating
                }
                eventBus.$emit('review-submitted', productReview)
                this.name = null,
                this.review = null,
                this.rating = null
            }else{
                if(!this.name) this.errors.push("Name required.")
                if(!this.rating) this.errors.push("Rating required.")
                if(!this.review) this.errors.push("Review required.")
            }
        }
    }
})

Vue.component('product-tabs', {
    props: {
        reviews: {
            type: Array,
            required: true
        }
    },
    template: '#product-tabs',
    data() {
        return {
            tabs: ['Reviews', 'Make a Review'],
            selectedTab: "Reviews"
        }
    },
})

var app = new Vue({
    el: '#app',
    data:{
        premium: false,
        cart: []
    },
    methods: {
        updateCart(id) {
            this.cart.push(id)
        }
    }
})
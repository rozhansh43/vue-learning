var eventBus = new Vue()

Vue.config.devtools = true;

Vue.component ('product', {
    props: {
        premium: {
            type:Boolean,
            required: true
        }
    },
    template: `
    <div class="product">
            <div class="product-image">
                <img :src="image" :alt="name" />
            </div>

            <div class="product-info">
                <h1>
                    {{ title }}
                </h1>

                <p v-if="inStock >= 1">
                    in stock
                </p>

                <p v-else>
                    out of stock
                </p>
                <p>
                    Shipping: {{ shipping }}
                </p>

                <ul>
                    <li v-for="detail in details">
                        {{ detail }}
                    </li>
                </ul>

                <div v-for="(variant,index) in variants" 
                :key="variant.variantId"
                class="color-box"
                :style = "{backgroundColor:variant.variantColor}"
                @mouseover="updateImage(index)"
                >
                    <p @mouseover="updateProduct(variant.variantImage)">
                    </p>
                </div>

                <button 
                class="button" 
                @click="AddToCart" 
                :disabled="!inStock" 
                :class="{ disabledButton: !inStock }"
                >
                    Add to cart
                </button>

         

            </div>

            <product-tabs :reviews="reviews">

            </product-tabs>

        </div>
    `,
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
    template: `
    <form class="review-form" @submit.prevent="onSubmit">

        <p v-if="errors.length">
            <b>
                please correct the following errors
            </b>

            <ul>
                <li v-for="error in errors">
                    {{ error }}
                </li>
            </ul>
        </p>
        <p>
            <label for="name">
                 Name
            </label>

            <input id="name" v-model="name">
        </p>

        <p>
            <label for="review">
                Review:
            </label>
            <textarea id="review" v-model="review">
            </textarea>
        </p>

        <p>
            <label for="rating">
                Review:
            </label>
            <select id="rating" v-model.number="rating">
                <option>
                    5
                </option>
                <option>
                    4
                </option>
                <option>
                    3
                </option>
                <option>
                    2
                </option>
                <option>
                    1
                </option>
            </select>
        </p>

        <p>
            <input type="submit" value="submit">
        </p>

    </form>
    `,
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
    template: `
    <div>
        <span class="tab" 
        :class="{ activeTab : selectedTab === tab}"
        v-for="(tab, index) in tabs" 
        :key="index"
        @click="selectedTab = tab"
        >
            {{ tab }}
        </span>

        <div v-show="selectedTab === 'Review'">
            <h2>
                Reviews 
            </h2>

            <p v-if="!reviews.length">
                There are no reviews yet
            </p>

            <ul v-else>
                <li v-for="review in reviews">
                    <p>
                        {{ review.name }}
                    </p>

                    <p>
                        {{ review.rating }}
                    </p>

                    <p>
                        {{ review.review }}
                    </p>
                </li>
            </ul>
    </div>            

    <product-review 
    v-show="selectedTab === 'Make a Review'"
    >
    </product-review>

    </div>
    `,
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
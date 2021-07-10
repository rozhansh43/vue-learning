Vue.config.devtools = true;

Vue.component ('product', {
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

                <ul>
                    <li v-for="detail in details">
                        {{ detail }}
                    </li>
                </ul>

                <div v-for="(variant,index) in variants" 
                :key="variant.variantId"
                class="color-box"
                :style = "{backgroundColor:variant.variantColor}"
                @mouseover="updateImage(index)">
                    <p @mouseover="updateProduct(variant.variantImage)">
                    </p>
                </div>

                <button class="button" @click="AddToCart" :disabled="!inStock" :class="{ disabledButton: !inStock }">
                    Add to cart
                </button>

                <div class="cart">
                    <p>
                        Cart {{ cart }}
                    </p>
                </div>

            </div>
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
        cart: 0,
        }
    },
    methods: {
        AddToCart() {
            this.cart += 1
        },
        updateImage(index){
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
        }
    }
})
var app = new Vue({
    el: '#app',
})
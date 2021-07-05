Vue.config.devtools = true
Vue.component('productDetails',{

})
Vue.component('product',{
    props:{
        premium:{
            type:Boolean,
            required:true
        }
    },

    template:`
        <div class="product">
            <div class="product-img">
                <img v-bind:src="image" />
                <span v-if="isOnSale">
                    onsale
                </span>
            </div>
            <p>
            shipping: {{ shipping }}
            </p>
            <div class="product-info">
                <h2 v-bind:href="titleLink">
                    {{ title }}
                </h2>
                <p v-if="enough >= 1">
                    in stock
                </p>
                <p 
                v-else
                :class="{soldOut:!enough}"
                 >
                    sold out
                </p>
                <ul>
                    <li v-for="detail in details">
                        {{ detail }}
                    </li>
                </ul>
                <ul>
                    <li v-for="size in sizes">
                        {{ size }}
                    </li>
                </ul>
                <div 
                v-for="(variant,index) in variants" 
                :key="variant.variantId"
                :style = "{backgroundColor:variant.variantColor, color:white , width : width + 'px'}"
                @mouseover="updateImage(index)"
                >
                        {{ variant.variantColor }}
                </div>

                <div class="cart">
                    <button v-on:click="decrease">
                        decrease the cart
                    </button>
                    <button 
                    v-on:click="cartCounter" 
                    :disabled="!enough"
                    :class="{diasabledbutton:!enough}"
                    >
                        add to cart 
                    </button>
                    <span>
                        {{ cart }}
                    </span>
                </div>

            </div>

            <product-review>
            </product-review>

        </div>
    `,
    data(){
        return {
            name :'sea food',
            brand : 'ba',
            titleLink : 'https://google.com',
            details : [ 'fish' , 'ocean' , 'fresh'],
            variants : [
                {
                    variantId: 234,
                    variantColor: 'Red',
                    variantQuantity : 0,
                    isOnSale : true ,
                    variantImage : 'https://img.beroozresaan.com/unsafe/315x315/filters:format(webp)/files/shop/product/8d69fcc04fca40aea88c7eaee3b7c367.jpg'
                },
                {
                    variantId: 344,
                    variantColor: 'blue',
                    variantQuantity : 10 ,
                    isOnSale : false ,
                    variantImage : 'https://img.beroozresaan.com/unsafe/315x315/filters:format(webp)/files/shop/product/b44111bc02b641619733c46685033288.jpg'
    
                }
            ],
            sizes :[ 'medium' , 'large'],
            white : 'white',
            width: 50,
            cart : 0,
            selectedVariant :0
        }
    },
    methods:{
        cartCounter(){
            this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId)
        },
        updateImage(index){
            this.selectedVariant = index
            console.log(index)
        },
        decrease(){
            this.cart -= 1
        },
        increase(){
            this.cart -= 1
        }
    },
    computed:{
        title(){
            return this.name + '' + this.brand
        },
        image(){
            return this.variants[this.selectedVariant].variantImage
        },
        enough(){
            return this.variants[this.selectedVariant].variantQuantity
        },
        isOnSale(){
            return this.variants[this.selectedVariant].isOnSale
        },
        shipping(){
            if(this.premium){
                return "free"
            }
            return 2.99
        }
    }
})

Vue.component('product-review',{
    template:`
    <form class="review-form">

    </form>

    <input v-model="name" />
    `,
    data(){
        return{
            name: null ,
            review: null ,
            rating : null
        }
    }
})

var app = new Vue({
    el:'#app',
    data:{
        premium: false,
        cart:[]
    },
    methods:{
        cartCounter(id){
            this.cart.push(id)
        }
    }
})

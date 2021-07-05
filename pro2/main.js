var app = new Vue({
    el:'#app',
    data:{
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
    },
    methods:{
        cartCounter(){
            this.cart += 1 
        },
        updateImage(index){
            this.selectedVariant = index
            console.log(index)
        },
        decrease(){
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
        }
    }
})
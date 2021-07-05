var app = new Vue({
    el:'#app',
    data:{
        product : 'sea food',
        titleLink : 'https://google.com',
        enough : 10 ,
        isOnSale : true ,
        details : [ 'fish' , 'ocean' , 'fresh'],
        variants : [
            {
                variantId: 234,
                variantColor: 'Red',
                variantImage : 'https://img.beroozresaan.com/unsafe/315x315/filters:format(webp)/files/shop/product/8d69fcc04fca40aea88c7eaee3b7c367.jpg'
            },
            {
                variantId: 344,
                variantColor: 'blue',
                variantImage : 'https://img.beroozresaan.com/unsafe/315x315/filters:format(webp)/files/shop/product/b44111bc02b641619733c46685033288.jpg'

            }
        ],
        sizes :[ 'medium' , 'large'],
        cart : 0,
        image : 'https://img.beroozresaan.com/unsafe/315x315/filters:format(webp)/files/shop/product/df0823628fca40419cca88368e00955f.jpg'
    },
    methods:{
        cartCounter : function(){
            this.cart += 1 
        },
        updateImage : function(variantImage){
            this.image = variantImage
        }
    }
})
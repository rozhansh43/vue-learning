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
                variantColor: 'Red'
            },
            {
                variantId: 344,
                variantColor: 'blue'
            }
        ],
        image : 'https://img.beroozresaan.com/unsafe/315x315/filters:format(webp)/files/shop/product/df0823628fca40419cca88368e00955f.jpg'
    }
})
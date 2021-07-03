var app = new Vue({
    el : '#appp',
    data :{
        message:'hello',
        styleObject:{
            fontSize : '30px',
            color:'red',
        }
    }
})

new Vue({
    el: '#v-for-object',
    data: {
      object: {
        title: 'How to do lists in Vue',
        author: 'Jane Doe',
        publishedAt: '2016-04-10'
      }
    }
  })
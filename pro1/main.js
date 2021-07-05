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

new Vue({
  el:'#likecounter',
  data:{
    counter:0,
    result:''
  },
  methods :{
  increase : function(){
    this.counter++;
    this.result = this.counter > 5 ? 'greater than 5' : 'lower than 5'
  }
  }
})
Vue.component('app-user');


new Vue({
    el:'#app',
    data:{
        title:'hello world',
    },
    props: ['likes'],
    components:{
        'app-user' :{
                data:function(){
                    return{
                        users: [
                            {username: 'max'},
                            {username: 'sam'},
                            {username: 'david'},
                        ],
                        like: 0,
                    }
                },
            template:'#app-user',
                
        }
    }
})
Vue.component('app-user');


new Vue({
    el:'#app',
    data:{
        title:'hello world',
    },
    components:{
        'app-user' :{
                data:function(){
                    return{
                        users: [
                            {username: 'max'},
                            {username: 'sam'},
                            {username: 'david'},
                        ]
                    }
                },
                template:`<div><div class="user" v-for="user in users"><p>username: {{ user.username }}</p></div></div>`
        }
    }
})
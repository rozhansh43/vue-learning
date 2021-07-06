Vue.filter('uppercase', function(value){
    return value.toUpperCase();
});

new Vue({
    el:'#app',
    data:{
        title:'hello world',
        meesage:'something'
    },
    computed:{
        theTitle: function(){
            return this.title.toUpperCase()
        }
    },
    filter:{
        lowercase: function(value){
            return this.value.toLowerCase();
        }
    }
})

new Vue({
    el:'#app',
    data:{
        cars: [
            { name: 'Kia' },
            { name: 'BMW' },
            { name: 'MVM' },
            { name: 'Hyundai' }
        ],
        newCar: ""
    },
    methods: {
        increaseCar() {
            this.cars.push({name: this.newCar});
            this.newCar= ""
        }
    },
    computed: {
        carName() {
            if(this.newCar.length > 2){
                return 'car name is :' + this.newCar
            }
        }
    }
})
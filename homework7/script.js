// function Car(brand) {
//     this.carBrand = brand;
//     this.drive = function () {
//         document.write(this.carBrand + " drive on the road" + "<br>")
//     }
// }
//
// var audi = new Car("Audi");
// var mercedes = new Car("Mercedes");
// var lamborghini = new Car("Lamborghini");
//
// audi.drive();
// mercedes.drive();
// lamborghini.drive();






// 1. Конструктор Vehicle
function Vehicle(car) {
    this.name = car;
    this.speed = 0;
}

// 1.1. Методы -- в прототип

Vehicle.prototype.stop = function() {
    this.speed = 0;
    document.write( this.name + ' стоїть' );
}


// 2. Конструктор Car
function Car(brand) {
    this.name = brand;
    this.speed = 0;
}

// 2.1. Наследование
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

// 2.2. Методы Car
Car.prototype.drive = function(speed) {
    this.speed += speed;
    document.write( this.name + ' їде, швидкість ' + this.speed );
};

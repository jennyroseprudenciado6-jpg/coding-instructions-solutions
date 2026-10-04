class Vehicle {
  constructor(type) {
    this.type = type;
  }
  drive() {
    return `${this.type} moves`;
  }
}
class Car extends Vehicle {
  constructor(type, brand) {
    super(type);
    this.brand = brand;
  }
  start() {
    return `${this.brand} ${this.type} starts`;
  }
}
class Truck extends Car {
  constructor(type, brand, load) {
    super(type, brand);
    this.load = load;
  }
  haul() {
    return `${this.brand} hauls ${this.load}`;
  }
}
const car = new Car('sedan', 'Tesla');
const truck = new Truck('pickup', 'Ford', 200);
console.log(car.start(), truck.haul());

class Shape {
  constructor(name) {
    this.name = name;
  }
  area() {
    throw new Error('Must implement area()');
  }
  perimeter() {
    throw new Error('Must implement perimeter()');
  }
}
class Circle extends Shape {
  constructor(name, radius) {
    super(name);
    this.radius = radius;
  }
  area() {
    return Math.PI * this.radius ** 2;
  }
  perimeter() {
    return 2 * Math.PI * this.radius;
  }
}
class Square extends Shape {
  constructor(name, side) {
    super(name);
    this.side = side;
  }
  area() {
    return this.side * this.side;
  }
  perimeter() {
    return 4 * this.side;
  }
}
const circle = new Circle('circle', 3);
const square = new Square('square', 4);
console.log(circle.area(), circle.perimeter(), square.area(), square.perimeter());

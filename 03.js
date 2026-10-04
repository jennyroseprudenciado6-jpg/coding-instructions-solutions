class Animal {
  constructor(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
  }
  speak() {
    return `${this.name} makes a sound`;
  }
}
class Cat extends Animal {
  speak() {
    return `${this.name} meows`;
  }
}
const cat = new Cat('Milo');
const dog = new Animal('Buddy');
console.log(cat.speak(), dog.speak());

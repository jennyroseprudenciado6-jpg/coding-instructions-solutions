class Pet {
  constructor(name) {
    this.name = name;
  }
  eat() { return `${this.name} eats.`; }
  sleep() { return `${this.name} sleeps.`; }
}
class Dog extends Pet {
  bark() { return `${this.name} barks.`; }
  fetch() { return `${this.name} fetches.`; }
}
const dog = new Dog('Buddy');
console.log(dog.eat(), dog.sleep(), dog.bark(), dog.fetch());

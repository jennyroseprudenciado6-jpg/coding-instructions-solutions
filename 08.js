class Robot {
  constructor(name) {
    this.name = name;
  }
  powerOn() {
    return `${this.name} is on`;
  }
  powerOff() {
    return `${this.name} is off`;
  }
  status() {
    return `${this.name} ready`;
  }
}
const r1 = new Robot('A1');
const r2 = new Robot('B2');
const r3 = new Robot('C3');
console.log(`${r1.powerOn()} ${r2.status()} ${r3.powerOff()}`);

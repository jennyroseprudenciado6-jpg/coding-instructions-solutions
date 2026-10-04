const fruits = ['apple', 'banana'];
const numbers = [1, 2, 3];
for (let i = 0; i < fruits.length; i++) {
  console.log(`Fruit ${fruits[i]}`);
}
const more = [...fruits, 'grape'];
const doubled = [...numbers.map((n) => n * 2)];
console.log(more, doubled);

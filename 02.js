const pets = ['Cat', 'Dog', 'Bird'].map((pet) => pet.toLowerCase());
const ages = [2, 4, 1].map((age) => age + 1);
const greet = (name) => `Hello ${name}!`;
const show = (item) => `Item: ${item}`;
const count = (list) => `Count: ${list.length}`;
console.log(`${greet('Nia')} ${show(pets[0])} ${count(ages)}`);

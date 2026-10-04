const pets = ['dog', 'cat', 'bird', 'fish'];
const ages = [2, 5, 1, 4];
const first = (item) => `First ${item}`;
const second = (item) => `Second ${item}`;
const match = (item) => item.length > 3;
const filtered = pets.filter(match).map(first);
const aged = ages.filter((age) => age > 2).map(second);
console.log(filtered, aged);

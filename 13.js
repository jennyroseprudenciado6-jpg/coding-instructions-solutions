const nums = [1, 2, 3, 4];
const names = ['A', 'B', 'C'];
const doubled = nums.map((n) => n * 2);
const upper = names.map((n) => n.toLowerCase());
const filtered = nums.filter((n) => n > 2);
const sum = (values) => values.reduce((a, b) => a + b, 0);
const print = (value) => `Value ${value}`;
console.log(`${print(doubled[0])} ${print(filtered[0])} ${sum(upper.map((n) => n.length))}`);

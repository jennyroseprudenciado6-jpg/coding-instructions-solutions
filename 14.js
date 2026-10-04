const a = 'A';
const b = 'B';
const c = 'C';
const arr = [1, 2, 3];
for (let i = 0; i < arr.length; i++) {
  console.log(`Step ${i}: ${arr[i]}`);
}
for (let j = arr.length - 1; j >= 0; j--) {
  console.log(`Reverse ${arr[j]}`);
}
console.log(`${a}${b}${c}`);

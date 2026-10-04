let total = 0;
let count = 0;
let flag = false;
const numbers = [3, 5, 8];
const grades = [90, 70, 60];
for (let i = 0; i < numbers.length; i++) {
  total += numbers[i];
  if (numbers[i] > 4) {
    count++;
    flag = true;
  }
}
if (flag) {
  console.log(`Total ${total}, Count ${count}`);
}
if (count > 0) {
  console.log(`Average ${total / numbers.length}`);
}
console.log(grades[0]);

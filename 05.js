const pet = { name: 'Luna', owner: { name: 'Ada' } };
const student = { name: 'Sam', id: 7 };
const { owner } = pet;
const { id: studentId } = student;
console.log(pet?.owner?.name ?? 'No owner');
console.log(student?.id ?? 'No id');
console.log(`Owner: ${owner.name}, Student ID: ${studentId}`);

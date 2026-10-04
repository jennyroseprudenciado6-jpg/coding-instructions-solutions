const user = { name: 'Nia', role: 'admin' };
const admin = { ...user, active: true };
const first = (person) => `Hello ${person.name}`;
const second = (person) => `Role: ${person.role}`;
console.log(first(admin));
console.log(second(user));

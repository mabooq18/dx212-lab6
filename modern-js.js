function greet(name, faculty) {
    return `Hello ${name}, welcome to ${faculty}`;
}

const greet_modern = (name, faculty) => `Hello ${name}, welcome to ${faculty}`;

console.log(greet("Manee", "Engineering"));
console.log(greet_modern("Manee", "Engineering"));
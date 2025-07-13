//1.Exporting a Variable

// mymodule.js
export const PI = 3.14;

// main.js
import { PI } from './mymodule.js';
console.log(PI); // 3.14

//2.Exporting a Function

// mymodule.js
export function add(a, b) {
  return a + b;
}

// main.js
import { add } from './mymodule.js';
console.log(add(2, 3)); // 5

//3.Exporting a Class

// mymodule.js
export class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

// main.js
import { Person } from './mymodule.js';
const person = new Person('John', 30);
console.log(person.name); // "John"
console.log(person.age); // 30

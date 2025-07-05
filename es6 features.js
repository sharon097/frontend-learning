// let and const

let name= 'Peter';
console.log(name); // John

const PI=3.14;
console.log(PI); // 3.14

//hoisting

function hoistfunc(){
    a=10;
    let b=20;
}
hoistfunc();
console.log(a); // 10
console.log(b); // ReferenceError: b is not defined

// Arrow functions

// ES5
var x = function(x, y) {
   return x * y;
}
console.log(x(5, 3)); // 15

// ES6
const x = (x, y) => x * y;
console.log(x(5, 3)); // 15


const add = (a, b) => a + b;
console.log(add(5, 3)); // 8

// Template literals

let firstName = 'John';
let lastName = 'Doe';
let greeting= `Hello, my name is ${firstName} ${lastName}.`;
console.log(greeting); // Hello, my name is John Doe.

//Destructuring
const person = {
    name: 'Alice',
    age: 30,
    city: 'New York'
};
const {name, age, city } = person;
console.log(name); // Alice
console.log(age); // 30
console.log(city); // New York

// Spread operator
const arr1 = [1,2,3];
const arr2=  [4,5,6];
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]




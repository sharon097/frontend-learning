//object basic structure
let person={
    name: 'Alice',
    age: 30,
    city: 'New York'
};

//using create() method
const student = Object.create(person);

// Variable as object (using object literal)
var people = {
    name: 'Alice',
    age: 30
};
console.log(people.name); // Alice

// Function as object (functions are objects in JS)
function greet() {
    console.log("Hello!");
}
greet.language = "English"; // Adding property to function
console.log(greet.language); // English

// Object as object (object created using constructor)
function Car(make, model) {
    this.make = make;
    this.model = model;
}
var myCar = new Car('Toyota', 'Corolla');
console.log(myCar.make); // Toyota
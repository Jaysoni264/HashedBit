//Create an object called person with properties for name, age, and occupation. 
// Write a function that logs a greeting message using these properties.

function greetPerson(person) {
    console.log(`Hello, my name is ${person.name}, I am ${person.age} years old and I work as a ${person.occupation}.`);
}
let person = { name: "Jay", age: 21, occupation: "developer" };
greetPerson(person);

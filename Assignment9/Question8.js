//Given an object with various properties, write a function that returns an array of the object’s keys 
// using Object.keys().
function getObjectKeys(obj) {
    return Object.keys(obj);
}
let person = { name: "Jay", age: 21, occupation: "Developer" };
console.log(getObjectKeys(person));
//console.log(person)

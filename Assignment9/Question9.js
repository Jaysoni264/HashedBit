//Write a function that takes two objects as arguments and merges them into one object using
//  Object.assign(). Return the new object.

function mergeObjects(obj1, obj2) {
    return Object.assign({}, obj1, obj2);  
}

let person = { name: "Jay", age: 21 };
let job = { occupation: "developer", city: "Nanded" };

let mergedObject = mergeObjects(person, job);

console.log(mergedObject);

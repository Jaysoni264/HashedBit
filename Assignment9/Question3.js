/*
Write a function that takes an array as an argument, adds a new 
element to the end of the array using push(), and then removes the last element using pop().
 Return the modified array.*/

function modifyArray(arr, fruitToPush) {
    arr.push(fruitToPush);  // Push the new fruit to the array
    console.log(`After push: ${arr}`);
    
    let poppedFruit = arr.pop();  // Pop the last fruit from the array
    console.log(`Popped fruit: ${poppedFruit}`);
    
    return arr;
}

let fruits = ["apple", "banana", "cherry"];
console.log("Initial array:", fruits);
console.log("Modified array:", modifyArray(fruits, "date"));

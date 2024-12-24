//Create an array of numbers and write a function that uses the map() method to return a new array 
// containing each number squared.


function squareNumbers(numbers) {
    return numbers.map(num => num * num);
}
let numbers = [1, 2, 3, 4, 5];
console.log(squareNumbers(numbers));

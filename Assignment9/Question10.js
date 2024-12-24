//Create an array of numbers and write a function that uses the reduce() method to calculate the 
// sum of all the numbers in the array.

function calculateSum(numbers) {
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

let numbers = [1, 2, 3, 4, 5];

console.log(calculateSum(numbers));  

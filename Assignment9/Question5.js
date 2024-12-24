//Write a function that filters out all even numbers from an array of numbers using the filter() method.
//  Return the new array of odd numbers


function filterOddNumbers(numbers) {
    return numbers.filter(num => num % 2 !== 0);
}
let numbers = [1, 2, 3, 4, 5, 6];
console.log(filterOddNumbers(numbers));
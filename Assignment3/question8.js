// Write a function to find repeated sum of digits until there is only a single digit in the number.
//Example - 456 - 4+5+6 = 15 - 1+5 = 6.


function repeatedSumOfDigits(num) {
    while (num >= 10) {
        num = num
            .toString()
            .split('')
            .map(Number)
            .reduce((sum, digit) => sum + digit, 0);
    }
    return num;
}

console.log(repeatedSumOfDigits(456)); 
console.log(repeatedSumOfDigits(999)); 

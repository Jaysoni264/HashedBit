
// Write a function to calculate which can add, subtract, multiply and divide two numbers. Use switch inside function.


// values 10,5

function calculate(n1, n2, operation) {
    let result;
    switch (operation) {
        case "add":
            result = n1 + n2;
            break;
        case "subtract":
            result = n1 - n2;
            break;
        case "multiply":
            result = n1 * n2;
            break;
        case "divide":
            if (n2 !== 0) {
                result = n1 / n2;
            } else {
                result = "Division by zero is not allowed.";
            }
            break;
        default:
            result = "Invalid operation. Use add, subtract, multiply, or divide.";
    }
    return result;
}


console.log(calculate(10, 5, "add"));     
console.log(calculate(10, 5, "subtract")); 
console.log(calculate(10, 5, "multiply")); 
console.log(calculate(10, 5, "divide"));  

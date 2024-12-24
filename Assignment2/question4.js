/*Write a function to perform this. You are given two numbers n1 and n2. 
You need to find the sum of the products of their corresponding digits. So, for a number n1= 6 and n2 = 34, 
you'll do (6*4)+(0*3) = 24.*/

function sumOfProducts(n1, n2) {
  
    const digits1 = n1.toString().split('').reverse();
    const digits2 = n2.toString().split('').reverse();
    let sum = 0;

   
    for (let i = 0; i < Math.min(digits1.length, digits2.length); i++) {
        sum += parseInt(digits1[i]) * parseInt(digits2[i]);
    }
    return sum;
}

console.log(sumOfProducts(6, 34)); 
console.log(sumOfProducts(23, 56)); 

/*Q3) let string = 'INDIA'
output = 'INDONESIA'
Use array.splice*/

let string = "INDIA";


let arr = string.split('');
arr.splice(5, 0, 'ONESIA'); 


let result = arr.join('');

console.log(result);


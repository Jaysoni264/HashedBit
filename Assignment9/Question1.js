//Write a JavaScript function that declares a variable using let, const, and var.
//  What is the difference in scope for each?


function variableScope() {
    if (true) {
        let a = 10; 
        const b = 20; 
        var c = 30; 
        console.log(a) //A variable declared with let is only accessible within the block 
        // (like within a loop or if statement) where it is defined. It is not accessible outside that block.
        console.log(b)//constant
    }
    console.log(c); // Accessible outside the block due to var
    // console.log(a); // Error: a is not defined
    // console.log(b); // Error: b is not defined
}
variableScope();

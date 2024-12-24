/* Write a function to replace wrong word with correct word in any sentance.
Like this - correctfn(string, wrong, correct)
Use string.replace in function.*/

function correctfn(string, wrong, correct) {
    return string.replace(wrong, correct);
}


let sentence = "I love my Country. My Country is beautiful.";
let result = correctfn(sentence, "Country", "India");

console.log(result);


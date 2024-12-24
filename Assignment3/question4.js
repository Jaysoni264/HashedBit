
//Take any string with minimum 20 characters. Count number of consonant and vowel in the string.


let inputStr = "This is a sample sentence with consonants and vowels";
let vowels = "aeiouAEIOU";

let vowelCount = 0;
let consonantCount = 0;

for (let char of inputStr) {
    if (/[a-zA-Z]/.test(char)) { 
        if (vowels.includes(char)) {
            vowelCount++;
        } else {
            consonantCount++;
        }
    }
}

console.log(`Vowels: ${vowelCount}, Consonants: ${consonantCount}`);


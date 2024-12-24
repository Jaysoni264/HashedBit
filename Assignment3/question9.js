//Write a function to count the number of words in a paragraph.


function countWords(paragraph) {
    const words = paragraph.trim().split(/\s+/); 
    return words.length;
}

const paragraph = "This is a simple paragraph with some words.";
console.log("Number of words:", countWords(paragraph)); 

//Write a function that takes an object with properties width and height and returns the area of a rectangle
//  (width * height).

function calculateArea(rectangle) {
    return rectangle.width * rectangle.height;
}
let rectangle = { width: 5, height: 10 };
console.log(calculateArea(rectangle));

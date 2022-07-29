// EXERCISE 03: JS Program To Find Area Of A Rectangle
// Write a JS program to input length and width of a rectangle and find area of the given rectangle
let readlineSync = require('readline-sync');

let length = + readlineSync.question('Enter length : ');
let width = + readlineSync.question('Enter width : ');

console.log('Area of rectangle = ' + (length * width) + ' sq. units');

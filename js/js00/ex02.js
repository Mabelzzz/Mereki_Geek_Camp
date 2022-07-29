//EXERCISE 02: JS Program To Find Perimeter Of A Rectangle
//Write a JS program to input length and width of a rectangle and calculate perimeter of the rectangle
let readlineSync = require('readline-sync');

let length = + readlineSync.question('Enter length : ');
let width = + readlineSync.question('Enter width : ');

console.log('Perimeter of rectangle = ' + (2 * (length + width)) + ' units');


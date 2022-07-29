// EXERCISE 12: Area Of Triangle
// Write a JS program to input side of an equilateral triangle from user and find area of the given triangle.
let readlineSync = require('readline-sync');

let base = readlineSync.question('Enter base of the triangle: ');
let height = readlineSync.question('Enter height of the triangle: ');
console.log('Area of the triangle = %d sq. units', 0.5 * base * height);

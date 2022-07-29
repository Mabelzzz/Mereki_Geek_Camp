// EXERCISE 13: Area Of Triangle From The Side
// Write a JS program to input side of an equilateral triangle from user and find area of the given triangle.
let readlineSync = require('readline-sync');

let side = readlineSync.question('Enter side of the equilateral triangle: ');
let height = Math.sqrt(Math.pow(side, 2) - Math.pow(side / 2, 2))
console.log('Area of equilateral triangle = %d sq. units', 0.5 * side * height);

// EXERCISE 00: Maximum Number
// Write a JS program to find maximum between two numbers using if else.
let readlineSync = require('readline-sync');

let num1 = + readlineSync.question('Input num1: ');
let num2 = + readlineSync.question('Input num2: ');
console.log('Maximum = %d', num1 > num2 ? num1 : num2);

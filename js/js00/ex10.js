// EXERCISE 10: Find Square Root Of A Number
// Write a JS program to input a number and find square root of the given number.
// You have to use Math function.
let readlineSync = require('readline-sync');

let nbr = + readlineSync.question('Enter any number: ');
console.log('Square root of %d = %d', nbr, Math.sqrt(nbr));

//EXERCISE 01: Perform All Arithmetic Operations
//Write a JS program to input two numbers and perform all arithmetic operations.
let readlineSync = require('readline-sync');

let first = + readlineSync.question('First number : ');
let second = + readlineSync.question('Second number : ');

console.log('sum = ' + (first + second));
console.log('Different = ' + (first - second));
console.log('Product = ' + (first * second));
console.log('Quotient = ' + (first / second));
console.log('Modulus = ' + (first % second));


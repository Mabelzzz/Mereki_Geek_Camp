//EXERCISE 01: Perform All Arithmetic Operations
//Write a JS program to input two numbers and perform all arithmetic operations.
let readlineSync = require('readline-sync');

let first = + readlineSync.question('First number   : ');
let second = + readlineSync.question('Second number : ');
console.log('Sum = %d', first + second);
console.log('Different = %d', first - second);
console.log('Product = %d', first * second);
console.log('Quotient = %d', first / second);
console.log('Modulus = %d', first % second);


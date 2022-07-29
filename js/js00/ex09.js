// EXERCISE 09: Find Power Of A Number Using Pow Function
// Write a JS program to input two numbers from user and find their power.
// You have to use Math function
let readlineSync = require('readline-sync');

let base = + readlineSync.question('Enter base: ');
let exp = + readlineSync.question('Enter exponent: ');
console.log('%d ^ %d = %d', base, exp, Math.pow(base, exp));

// EXERCISE 03: Is this number divisible by 5 and 11?
// Write a JS program to check whether a number is divisible by 5 and 11 or not using if else.
let readlineSync = require('readline-sync');

let nbr = readlineSync.question('Input number: ');
console.log('Number is%s divisible by 5 and 11.', nbr % 5 == 0 && nbr % 11 == 0 ? '' : ' not')

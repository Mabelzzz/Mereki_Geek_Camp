// EXERCISE 05: Is this year a leap year?
// Write a JS program to check leap year using if else.
let readlineSync = require('readline-sync');

let y = readlineSync.question('Input year: ');
let result = ((y % 4 === 0) && (y % 100 !== 0)) || (y % 400 === 0) ? '' : ' not';
console.log('%d is%s leap year', y, result);

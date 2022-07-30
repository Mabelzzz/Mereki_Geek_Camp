// EXERCISE 01: Factorial Of A Number
// Write a JS program to input a number and calculate its factorial.
let input = require('readline-sync');

let n = Number(input.question('Input number: '));
let fact = 1;
let i = 1;

if (n == 0) {
    fact = 1;
} else {
    while (i <= n) {
        fact = fact * i;
        i++;
    }
}
console.log('Factorial: %d', fact);

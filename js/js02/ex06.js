// EXERCISE 06: Sum Of All Even Numbers From 1 to N
// Write a JS program to input number from user and find sum of all even numbers between 1 to n
let readlineSync = require('readline-sync');

let upper = readlineSync.question('Input upper limit of even number: ');
let even = 0;
let sum = 0;
for (i = 1; i <= Math.floor(upper / 2); i++) {
	even += 2;
	sum += even;
}
console.log('Sum of even numbers between 1 to %d: %d', upper, sum);

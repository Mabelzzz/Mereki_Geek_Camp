// EXERCISE 05: Sum Of All Natural Numbers From 1 to N
// Write a JS program to find the sum of all natural numbers between 1 to n.
let readlineSync = require('readline-sync');

let upper = readlineSync.question('Input upper limit: ');
let sum = 0;
for (i = 1; i <= upper; i++) {
	sum += i;
}
console.log('Sum of natural numbers 1-%d: %d', upper, sum);

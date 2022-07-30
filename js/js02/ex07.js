// EXERCISE 07: Sum Of All Odd Numbers From 1 to N
// Write a JS program to input number from user and find sum of all odd numbers between 1 to n.
let readlineSync = require('readline-sync');

let upper = readlineSync.question('Input upper limit of odd number: ');
let odd = -1;
let sum = 0;
for (i = 1; i <= Math.ceil(upper / 2); i++) {
	odd += 2;
	sum += odd;
}
console.log('Sum of odd numbers from 1-%d: %d', upper, sum);

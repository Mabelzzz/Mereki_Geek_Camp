// EXERCISE 04: All Odd Numbers From 1 To N
// Write a JS program to print all even numbers from 1 to n.
let readlineSync = require('readline-sync');

let upper = readlineSync.question('Input upper limit: ');
console.log('Odd numbers between 1 to %d: ', upper);
let odd = -1;
for (i = 1; i <= Math.ceil(upper / 2); i++) {
	odd += 2;
	process.stdout.write(i == Math.ceil(upper / 2) ? odd + '\n' : odd + ', ');
}


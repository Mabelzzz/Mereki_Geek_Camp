// EXERCISE 03: All Even Numbers From 1 To N
// Write a JS program to print all even numbers from 1 to n.
let readlineSync = require('readline-sync');

let upper = readlineSync.question('Input upper range: ');
console.log('Even numbers between 1 to %d:', upper);
let even = 0;
for (i = 1; i <= Math.floor(upper / 2); i++) {
	even += 2;
	process.stdout.write(i == Math.floor(upper / 2) ? even + '\n' : even + ', ');
}

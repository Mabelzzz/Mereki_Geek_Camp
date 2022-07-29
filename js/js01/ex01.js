// EXERCISE 01: Maximum Number Between 3 Numbers
// Write a JS program to find maximum between three numbers using if else.
let readlineSync = require('readline-sync');

let max = 0;

for(i = 1; i <= 3; i++) {
	let nbr = Number(readlineSync.question('Input num' + i + ': '));
	max = nbr > max ? nbr : max;
}
console.log('Maximum = %d', max);

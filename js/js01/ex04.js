// EXERCISE 04: Even Or Odd?
// Write a JS program to check whether a number is even or odd using if else.
let readlineSync = require('readline-sync');

let nbr = Number(readlineSync.question('Input number: '));
if (nbr >= 0) {
	console.log('%d is %s number.', nbr, nbr % 2 == 0 ? 'even' : 'odd');
} else {
	console.log('%d is not even or odd number.', nbr);
}


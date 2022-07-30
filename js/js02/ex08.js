// EXERCISE 08: Multiplication Table Of A Given Number
// Write a JS program to input a number from user and print multiplication table of the given number.
let readlineSync = require('readline-sync');

let num = readlineSync.question('Input num: ');
for (i = 1; i <= 10; i++) {
	console.log('%d * %d = %d', num, i, num * i);
}

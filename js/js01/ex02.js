// EXERCISE 02: + - 0 Number
// Write a JS program to check positive, negative or zero using simple if or if else.
let readlineSync = require('readline-sync');

let num = Number(readlineSync.question('Input num: '));
if (num == 0) {
	console.log('%d is zero', num)
} else {
	console.log('%d is %s', num, num > 0 ? 'positive' : 'negative');
}

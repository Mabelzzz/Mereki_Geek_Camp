// EXERCISE 09: Power Of A Number
// Write a JS program to find power of a number.
// No math function
let readlineSync = require('readline-sync');

let base = readlineSync.question('Input base: ');
let exp = readlineSync.question('Input exponent: ');
let ans = 1;
for (i = 1; i <= exp; i++) {
	ans *= base;
}
console.log('%d ^ %d = %d', base, exp, ans);

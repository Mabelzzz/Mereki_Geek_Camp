// EXERCISE 02: HCF Of Two Numbers
// Write a JS program input two numbers from user and find the HCF.
let input = require('readline-sync');

let x = Number(input.question('Input first number : '));
let y = Number(input.question('Input second number : '));

let max = x > y ? x : y;
let i = max;
while (i > 0) {
    if (x % i === 0 && y % i === 0) {
        console.log('HCF of %d and %d : %d', x, y, i);
        break;
    }
    i--;
}

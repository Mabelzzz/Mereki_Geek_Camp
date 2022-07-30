// EXERCISE 00: All Factor Of A Number
// Write a JS program to input a number from user and find all factors of the given number.
let input = require('readline-sync');

let n = Number(input.question('Input number: '));
let i = 1;
process.stdout.write('Factors of ' + n + ': ');
while (i <= n) {
    if (n % i === 0) {
        process.stdout.write(i == n ? i + '\n' : i + ', ');
    }
    i++;
}

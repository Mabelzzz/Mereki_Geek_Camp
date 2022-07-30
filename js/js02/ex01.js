// EXERCISE 01: Natural Numbers From N to 1 (reverse)
// Write a JS program to print all natural numbers in reverse from n to 1.
let readlineSync = require('readline-sync');

let n = readlineSync.question('Input N: ');
process.stdout.write('Nutural numbers from ' + n + '-1 in reverse: ');
for (i = n; i >= 1; i--) {
	process.stdout.write(i == 1 ? i + '\n' : i + ', ');
}

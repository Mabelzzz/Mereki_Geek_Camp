// EXERCISE 00: Natural Numbers To Limit
// Write a JS program to print all natural numbers from 1 to n. Output
let readlineSync = require('readline-sync');

let upper = readlineSync.question('Input upper limit: ');
process.stdout.write('Nutural numbers from 1 to ' + upper + ': ');
for (i = 1; i <= upper; i++) {
	process.stdout.write(i == upper ? i + '\n' : i + ', ');
}

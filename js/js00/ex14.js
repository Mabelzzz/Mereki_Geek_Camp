// EXERCISE 14: Score
// Write a JS program to input marks of five subjects of a student and calculate total, average and percentage of all subjects.
let readlineSync = require('readline-sync');

let subject = Number(readlineSync.question('Enter marks of five subjects: '));
let total = subject;

for (i = 0; i < 4; i++) {
	subject = Number(readlineSync.question(' '));
	total += subject;
}

//let average = total / 5;
console.log('Total = %d', total);
console.log('Average = %d', total / 5);
console.log('Percentage = %d', total * 100 / 500);

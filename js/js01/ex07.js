// EXERCISE 07: Grade
// Write a C program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer, calculate percentage and grade according to given
// conditions: If percentage >= 90% : Grade A If percentage >= 80% : Grade B If percentage >= 70% : Grade C If percentage >= 60% : Grade D If percentage >= 40% : Grade E If percentage < 40% : Grade F
let readlineSync = require('readline-sync');

let subject = Number(readlineSync.question('Input marks of five subjects: '));
let total = subject;

for (i = 0; i < 4; i++) {
	subject = Number(readlineSync.question(' '));
	total += subject;
}

let pct = total * 100 / 500;
let grade;
if (pct >= 90) {
	grade = 'A';
} else if (pct >= 80) {
	grade = 'B';
} else if (pct >= 70) {
	grade = 'C';
} else if (pct >= 60) {
	grade = 'D';
} else if (pct >= 40) {
	grade = 'E';
} else {
	grade = 'F';
}
console.log('Percentage = %d \nGrade %s', pct, grade);

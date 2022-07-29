// EXERCISE 08: salary and calculate gross salary of an employee
// Write a JS program to input two numbers from user and find their power.
// If basic salary is lower than 10,000, hra = 20 and da = 80.
// If basic salary is between 10,000 and 20,000, hra = 25 and da = 95.
// If basic salary is more than 20,000, hra = 30 and da = 95.
// H.R.A = salary * hra/100
// D.A = salary * da/100
// Gross = salary + H.R.A + D.A
let readlineSync = require('readline-sync');

let salary = Number(readlineSync.question('Input basic salary of an employee: '));
// let hra;
// let da;
if (salary > 20000) {
	hra = 30;
	da = 95;
} else if (salary >= 10000) {
	hra = 25;
	da = 95;
} else {
	hra = 20;
	da = 80;
}
let gross = salary + (salary * hra / 100) + (salary * da /100);
console.log('Gross salary = %d', gross);


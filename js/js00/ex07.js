// EXERCISE 07: Convert Temperature From Degree Fahrenheit To Celsius
// Write a JS program to input temperature in Fahrenheit and convert to Centigrade.
let readlineSync = require('readline-sync');

let Fahrenheit = Number(readlineSync.question('Enter temperature in Fahrenheit: '));
console.log('Temperature in Celsius = %d C', (Fahrenheit - 32) * 5 / 9)

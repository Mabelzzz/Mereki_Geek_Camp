// EXERCISE 06: Convert Temperature From Degree Celsius To Fahrenheit
// Write a JS program to input temperature in Centigrade and convert to Fahrenheit.
let readlineSync = require('readline-sync');

let Celsius = Number(readlineSync.question('Enter temperature in Celsius: '));
console.log('Temperature in Fahrenheit = %d F', (Celsius * 9 / 5) + 32)

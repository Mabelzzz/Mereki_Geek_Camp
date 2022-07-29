// EXERCISE 05: Convert Centimeter To Meter And Kilometer
// Write a JS program to input length in centimeter and convert it to meter and kilometer.
let readlineSync = require('readline-sync');

let length = + readlineSync.question('Enter length in centimeter: ');
console.log('Length in meter     = %d m', length / 100);
console.log('Length in kilometer = %d km', length / 100000);

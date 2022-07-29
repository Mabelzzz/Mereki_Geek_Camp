// EXERCISE 05: Convert Centimeter To Meter And Kilometer
// Write a JS program to input length in centimeter and convert it to meter and kilometer.
let readlineSync = require('readline-sync');

let length = + readlineSync.question('Enter length in centimeter: ');
console.log('Length in meter     = ' + (length / 100) + ' m');
console.log('Length in kilometer = ' + (length / 100000) + ' km');

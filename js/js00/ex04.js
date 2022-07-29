// EXERCISE 04: JS Program To Find Diameter, Circumstance And Area Of Circle
// Write a JS program to input radius of a circle from user and find diameter, circumference and area of the circle.
let readlineSync = require('readline-sync');

let radius = readlineSync.question('Enter radius : ');
console.log('Diameter = ' + (2 * radius) + ' units');
console.log('Circumference = ' + (2 * Math.PI * radius) + ' sq. units');
console.log('Area = ' + (Math.PI * radius * radius) + ' sq. units');

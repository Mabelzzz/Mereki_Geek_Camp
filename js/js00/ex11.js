// EXERCISE 11: Third Angle
// Write a JS Program to input two angles from user and find third angle of the
let readlineSync = require('readline-sync');

let first = readlineSync.question('Enter first angle: ');
let second = readlineSync.question('Enter second angle: ');
console.log('Third angle = %d', 180 - first - second);

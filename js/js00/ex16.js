// EXERCISE 16: Compound Interest
// Write a C program to input principle (amount), time and rate (P, T, R) and find Compound Interest.
// Compound Interest Formula = P x (1 + R ÷ 100) ^ T
let readlineSync = require('readline-sync');

let p = readlineSync.question('Enter principle (amount): ');
let t = readlineSync.question('Enter time: ');
let r = readlineSync.question('Enter rate: ');
console.log('Simple Interest = %d', p * Math.pow(1 + r / 100, t));

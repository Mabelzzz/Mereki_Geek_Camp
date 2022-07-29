// EXERCISE 15: Simple Interest
// Write a JS program to input principle, time and rate (P, T, R) from user and find Simple Interest.
// Simple Interest Formula = P x R x T ÷ 100 Output
let readlineSync = require('readline-sync');

let p = readlineSync.question('Enter principle: ');
let t = readlineSync.question('Enter time: ');
let r = readlineSync.question('Enter rate: ');
console.log('Simple Interest = %d', p * r * t / 100);

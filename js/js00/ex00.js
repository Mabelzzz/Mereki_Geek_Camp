//EXERCISE 00: Calculate 2 Numbers Program
//Write a JS program to input two numbers from user and calculate their sum. C program to add two numbers and display their sum as output.

let readlineSync = require('readline-sync');

let first = + readlineSync.question('Input first number   : ');
let second = + readlineSync.question('Input second number : ');
console.log('sum = %d', first + second);

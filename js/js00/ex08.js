// EXERCISE 08: Convert Days To Years Week And Days
// Write a JS program to input number of days from user and convert it to years, weeks and days.
let readlineSync = require('readline-sync');

let days = + readlineSync.question('Enter days: ');
let year = Math.floor(days / 365);
let week = Math.floor((days % 365) / 7);
let day  = Math.floor((days % 365) % 7);
console.log('%d days = %d year/s, %d week/s and %d day/s', days, year, week, day);

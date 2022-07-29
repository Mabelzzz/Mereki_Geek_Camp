// EXERCISE 06: How much will I make from selling stuff?
// Write a JS program to input cost price and selling price of a product and check profit or loss.
let readlineSync = require('readline-sync');

let cost = + readlineSync.question('Input cost price: ');
let sell = + readlineSync.question('Input selling price: ');
console.log('%s: %d', cost > sell ? 'Loss' : 'Profit', Math.abs(cost - sell));

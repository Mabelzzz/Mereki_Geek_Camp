// EXERCISE 04: Prime Or Not?
// Write a program in JS to input a number and check whether the number is prime number or not.
let input = require('readline-sync');

let n = Number(input.question('Input any number : '));
let ans;
let i = 2;
while (i <= n) {
    if (n % i === 0 && i !== n) {
        ans = ' not'
        break;
    } else if (n % i === 0 && i === n){
        ans = ''
        break;
    }
    i++;
}
console.log('%d is%s prime number', n, ans);

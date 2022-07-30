// EXERCISE 03: LCM Of Two Numbers
// Write a JS program to input two numbers from user and find LCM (Lowest Common Multiple).
let input = require('readline-sync');

let n1 = Number(input.question('Input first number : '));
let n2 = Number(input.question('Input second number : '));

let max = n1 > n2 ? n1 : n2;
let lcm = max;

while (1){
    if (lcm % n1 == 0 && lcm % n2 == 0) {
        console.log('LCM of %d and %d : %d', n1, n2, lcm);
				break;
    }
		lcm += max;
}

// EXERCISE 06: Sum Of All Prime Number Between Z to N.
// Write a JS program to find sum of all prime numbers between z to n.
let input = require('readline-sync');

let lower = Number(input.question('Input lower limit : '));
let upper = Number(input.question('Input upper limit : '));
function isPrime(nbr) { //function for check whether number is prime number or not.
    let i = 2;
    while (i <= nbr) {
        if (nbr % i == 0 && i != nbr) { //nbr isn't prime, so return 0
            return 0;
        } else if (nbr % i == 0 && i == nbr){ //nbr is prime, so return nbr
            return nbr;
        }
        i++;
    }
}

let sum = 0;
let nbr = lower + 1;
while (nbr < upper) {
    let p = Number(isPrime(nbr));
    if (p !== 0) {
        sum += p;
    }
    nbr++;
}
console.log('Sum of prime numbers between %d - %d : %d', lower, upper, sum)

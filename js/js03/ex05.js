// EXERCISE 05: All Prime Number Between Z To N
// Write a JS program to print all Prime numbers between z to n.
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
let nbr = lower;
process.stdout.write('Prime numbers from ' + lower + ' to ' + upper + ': ');
while (nbr <= upper) {
    let x = Number(isPrime(nbr));
    if (x !== 0) {
        process.stdout.write(x + ' ');
    }
    nbr++;
}

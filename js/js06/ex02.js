// EXERCISE 02 : Triangle number pattern using 0, 1 in js – 02
// Write a js program to print the given triangle number pattern using 0, 1.
let readlineSync = require('readline-sync');

let n = readlineSync.question('Input N: ');
// for loop
console.log('---- for loop ----');
for (let i = 1, k = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++ && k++) {
        process.stdout.write(k % 2 === 0 ? `0` + '' : `1` + '');
    }
    console.log();
}

//while loop
console.log('---- while loop ----');
let x = 1, z = 1;
while (x <= n) {
    let y = 1;
    while (y <= x) {
        process.stdout.write(z % 2 === 0 ? `0` + '' : `1` + '');
        y++ && z++;
    }
    console.log();
    x++;
}

// EXERCISE 00 : Triangle number pattern using 0, 1 in js – 00
// Write a js program to print the given triangle number pattern using 0, 1.
let readlineSync = require('readline-sync');

let n = readlineSync.question('Input N: ');
// // for loop
console.log('---- for loop ----');
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write(j % 2 === 0 ? `0` + '' : `1` + '');
    }
    console.log();
}

//while loop
console.log('---- while loop ----');
let x = 1;
while (x <= n) {
    let y = 1;
    while (y <= x) {
        process.stdout.write(y % 2 === 0 ? `0` + '' : `1` + '');
        y++;
    }
    console.log();
    x++;
}

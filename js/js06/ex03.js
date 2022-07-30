// EXERCISE 03 : Triangle number pattern using 0, 1 in js – 03
// Write a js program to print the given triangle number pattern using 0, 1.
let readlineSync = require('readline-sync');

let n = readlineSync.question('Input N: ');
// for loop
console.log('---- for loop ----');
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write(i == 1 || i == n || j == 1 || j == i ? `1` + '' : `0` + '');
    }
    console.log();
}

//while loop
console.log('---- while loop ----');
let x = 1;
while (x <= n) {
    let y = 1;
    while (y <= x) {
        process.stdout.write(x == 1 || x == n || y == 1 || y == x ? `1` + '' : `0` + '');
        y++;
    }
    console.log();
    x++;
}

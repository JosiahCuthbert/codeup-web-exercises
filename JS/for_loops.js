'use strict';

console.log("hello from for loops");

// Create a file named for_loops.js inside the js directory and link it to your loops.html file.
//
//     Create a function named showMultiplicationTable that accepts a number and
//     console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)
//
// For example, showMultiplicationTable(7) should output
//
//
// 7 x 1 = 7
// 7 x 2 = 14
// 7 x 3 = 21
// 7 x 4 = 28
// 7 x 5 = 35
// 7 x 6 = 42
// 7 x 7 = 49
// 7 x 8 = 56
// 7 x 9 = 63
// 7 x 10 = 70

function showMultiplicationTable(x){
    var i = 0
    while(i <= 10){
        console.log(x*i)
        i++;
    }
}

// Use a for loop and the code from the previous lessons to generate 10 random numbers between
// 20 and 200 and output to the console whether each number is odd or even. For example:
//
//
//     123 is odd
// 80 is even
// 24 is even
// 199 is odd
// ...

var getRandom = Math.floor(Math.random() * (200 - 20) + 20)

var i = 0

while(i<=10){
    console.log(getRandom + ": it is " + (getRandom % 2 == 0) + " that this number is even")
    i++;
}

// function isEven (x){
//     if (x % 2 == 0);
//     console.log("this is an even number");
// }   else{
//     console.log('this is an odd number')
// }

// Create a for loop that uses console.log to create the output shown below.
//
//
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999

for

// Create a for loop that uses console.log to create the output shown below.
//
//
// 100
// 95
// 90
// 85
// 80
// 75
// 70
// 65
// 60
// 55
// 50
// 45
// 40
// 35
// 30
// 25
// 20
// 15
// 10
// 5
"use strict";

console.log("hello from while.js");

// An ice cream seller can't go home until she sells all of her cones. First write enough code that
// generates a random number between 50 and 100 representing the amount of cones to sell before you start your loop.
// Inside of the loop your code should generate another random number between 1 and 5, simulating the amount of cones
// being bought by her clients. Use a do-while loop to log to the console the amount of cones sold to each person.
// This is a way get the random numbers for this exercise.

var conesToSell = Math.floor(Math.random() * 50) + 50;

// for (var conesBeingBought = 0;conesBeingBought < Math.floor(Math.random() * 5) + 1;conesBeingBought++)

var totalConesBought = 0
//
// do{
//     console.log("number of cones bought by this customer: " + conesBeingBought);
//     totalConesBought++;
// }   while(totalConesBought<conesToSell);

console.log("total number of cones that need to be sold: " + conesToSell)

do{
    for (var conesBeingBought = 0;conesBeingBought < Math.floor(Math.random() * 5) + 1;conesBeingBought++)
    totalConesBought+=conesBeingBought;
    console.log("number of cones bought by customer: " + conesBeingBought, '\n',"total number of cones that have been bought: " + totalConesBought)
}   while(totalConesBought<=conesToSell);

// // This is how you get a random number between 50 and 100
// var allCones = Math.floor(Math.random() * 50) + 50;
// // This expression will generate a random number between 1 and 5
// Math.floor(Math.random() * 5) + 1;
// The output should be similar to the following:
//
//     5 cones sold...  // if there are enough cones
// Cannot sell you 6 cones I only have 3...  // If there are not enough cones
// Yay! I sold them all! // If there are no more cones
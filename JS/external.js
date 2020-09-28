"use strict";

console.log("hello from external javascript");

//1

alert("welcome to my website");

//2

var userColor = prompt("what is your favorite color?");

alert(userColor + " is my favorite color too!");

//3

    //q1

var price = Number(prompt("what is the price of a movie rental?"))

var LittleMermaid = Number(prompt("how many times was the little mermaid rented?"))
var BrotherBear = Number(prompt("how many times was brother bear rented?"))
var Hercules = Number(prompt("how many times was hercules rented?"))

console.log("Little Mermaid cost = $" + (LittleMermaid*price))
console.log("Brother Bear cost = $" + (BrotherBear*price))
console.log("Little Mermaid cost = $" + (Hercules*price))

    //q2

var GoogleRate = Number(prompt("what is Google's hourly rate?"))
var AmazonRate = Number(prompt("what is Amazon's hourly rate?"))
var FacebookRate = Number(prompt("what is Facebook's hourly rate?"))

var GoogleHours = Number(prompt("how many hours did you work at google this week?"))
var AmazonHours = Number(prompt("how many hours did you work at amazon this week?"))
var FacebookHours = Number(prompt("how many hours did you work at facebook this week?"))

console.log("Weekly earnings from Google = $" + (GoogleHours*GoogleRate))
console.log("Weekly earnings from Amazon = $" + (AmazonHours*AmazonRate))
console.log("Weekly earnings from Facebook = $" + (FacebookHours*FacebookRate))

    //q3

var isClassFull = confirm("is the class full yet?");
var doesScheduleConflict = confirm("is your schedule open?");

var canYouEnroll = (!isClassFull && doesScheduleConflict)

alert("it is " + canYouEnroll + " that you are able to enroll in the class")

    //q4

var itemQuantity = confirm("have you purchased more than two items?");
var offerExpiration = confirm("has the offer expired?");
var premiumMember = confirm("are you a premium member?");

var offerEligible = ((itemQuantity && !offerExpiration) || (premiumMember && !offerExpiration))

alert("it is " + offerEligible + " that you can redeem this offer")


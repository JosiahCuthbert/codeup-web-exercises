"use strict";

console.log("hello from math exercise")

// create a circle object
var circle = {
    radius: 3,

    getArea: function (radius) {
        // TODO: complete this method
        // hint: area = pi * radius^2

        return ((radius*2)*(Math.PI)); // TODO: return the proper value
    },

    logInfo: function (doRounding){
        if (doRounding == true){
            console.log(Math.round(circle.getArea(circle.radius)));
        }   else if(doRounding == false){
            console.log(circle.getArea(circle.radius));
        }
        // TODO: complete this method.

        // If doRounding is true, round the result to the nearest integer.
        // Otherwise, output the complete value

        console.log("Area of a circle with radius: " + this.radius + ", is: " + this.getArea(this.radius));
    }
};

// log info about the circle
console.log("Raw circle information");
circle.logInfo(false);
console.log("Circle information rounded to the nearest whole number");
circle.logInfo(true);

console.log("=======================================================");
// TODO: Change the radius of the circle to 5.

circle.radius = 5;
console.log("the radius has now ben changed to " + circle.radius);

// log info about the circle
console.log("Raw circle information");
circle.logInfo(false);
console.log("Circle information rounded to the nearest whole number");
circle.logInfo(true);

function randomNumber (min,max){
    return (Math.round(Math.random()*(max - min + 1) + min));
}

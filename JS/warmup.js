"use strict";

console.log("hello dumbledore")
console.log("hello harry");
console.log("hello ron");
console.log("hello hermione");
console.log("hello neville");
console.log("hello hagrid");
function sayHello(name) {
    console.log("hello" + name);
}

sayHello("dumbledore")
sayHello(name:"harry");
sayHello(name:"ron");
sayHello(name:"hermione");
sayHello(name:"neville");
sayHello(name:"hagrid");

//make sure to use quotes. when you create a function like this, intellij will autofill your theme (in this case "name:")
//if you only want to add a single file, use git add filename. if you do a git status then begin your git add and begin typing the file name, "tab" will autocomplete

"use strict";

var keystrokes = [];
var konami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13]

$(document).keyup(function(event){
    keystrokes.push(event.keyCode);
    console.log(keystrokes);
    var containsAll = konami.every(function(i){
        return keystrokes.includes(i);
        });
    if(containsAll){
        $("h1").css("color", "red");
    }
});


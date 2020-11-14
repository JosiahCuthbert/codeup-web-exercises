"use strict";

$("#show-answers").click(function(){
    $("dd").toggleClass("invisible");
})

$("#yellow-background").click(function(){
    // $("dd").last().css("background-color", "yellow");
    $("li").last().css("background-color", "yellow");
})

$("h3").dblclick(function(){
    $(this).next().css('font-weight', 'bold');
})

$("li").click(function(){
    $(this).parent().children().first().css("color", "blue");
})
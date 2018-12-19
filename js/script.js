/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var techPlacement = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var totalScore;
    });


    function oil(q1Result) {
        if (q1Result==="castor oil") {
        return 2; }
         else if (q1Result==="coconut oil") {
        return 3;}
        else if (q1Result ==="tea tree oil"){
        return 1;
        }
        return 0;
        
    }
    function product(q2Result) {
        if(q2Result==="shea moisture") {
        return 3; }
        else if (q2Result==="cantu") {
        return 2; }
        else if (q2Result==="carol's daughter") {
        return 4;
        }
        return 0;
    }
        
    function gel(q3Result) {
        if (q3Result==="eco style") {
        return 5; }
        else if (q3Result==="gorilla snot") {
        return 4; }
        else if (q3Result==="wetline xtreme") {
        return 3; }
        else { return 0;}
        
        }
        
}
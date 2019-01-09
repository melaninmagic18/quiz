/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var techPlacement = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Input = $("#question1").val();
        var q2Input = $("#question2").val();
        var q3Input = $("#question3").val();
        var totalScore;
        var q1Score = oil(q1Input);
        var q2Score = product(q2Input);
        var q3Score = gel(q3Input)
        var total = q1Score+q2Score+q3Score ;
        $(".result").text(total);
    });


    function oil(q1Input) {
        q1Input= q1Input.toLowerCase();
        if (q1Input==="castor oil") {
            return 2; 
        }
        else if (q1Input==="coconut oil") {
            return 3;
        }
        else if (q1Input ==="tea tree oil"){
            return 1;
        }
        return 0;
    }
    
    function product(q2Input) {
        q2Input = q2Input.toLowerCase();
        if (q2Input==="shea moisture") {
            return 3; 
        }
        else if (q2Input==="cantu") {
            return 2; 
        }
        else if (q2Input==="carol's daughter") {
            return 4;
        }
            return 0;
    }
        
    function gel(q3Input) {
        q3Input = q3Input.toLowerCase();
        if (q3Input==="eco style") {
            return 5; 
        }
        else if (q3Input==="gorilla snot") {
            return 4; 
        }
        else if (q3Input==="wetline xtreme") {
            return 3; 
        }
        else { 
            return 0;
        }
        
    }
    


    function answer(totalScore) {
        if (totalScore < 5) {
            return "shea moisture";
        }
        else if (totalScore >= 5 
        &&  totalScore < 6) {
            return "cantu";
        }
        else {return "carol's daughter"}
    }
});
        
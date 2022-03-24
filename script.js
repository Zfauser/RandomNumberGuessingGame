$(document).ready(function(){
    let random = Math.floor(Math.random() * 10) + 1;
    let tries = 1;
    let allowedtries = 5;
    let max = 10;
    let previous = 0;
    $("input").attr({
        "max" : max,
     });
    $("#guessButton").click(function(){
        console.log($("#guess").val());
        if($("#guess").val() == random){
            console.log("win");
            $("#result").text("");
            $("#guessButton").hide();
            $("#playAgain").show();
            if (tries == 1){
                $("#result").append(" You guessed it in " + tries + " try!");
            }
            if (tries > 1){
                $("#result").append(" You guessed it in " + tries + " tries!");
            }
        }
        else if($("#guess").val() > random && $("#guess").val() <= max){
            console.log("high guess");
            console.log("Remaining tries: " + (allowedtries - tries))
            $("#result").text("Too high! - Remaining tries: " + (allowedtries - tries));
            previous = tries;
            tries++;
            if(tries > allowedtries){
                $("#result").text("You lose! The number was" + random);
                $("#guessButton").hide();
                $("#playAgain").show();
            }
        }
        else if($("#guess").val() < random && $("#guess").val() >= 1){
            console.log("low guess");
            console.log("Remaining tries: " + (allowedtries - tries));
            $("#result").text("Too low! - Remaining tries: " + (allowedtries - tries));
            previous = tries;
            tries++;
            if(tries > allowedtries){
                $("#result").text("You lose! The number was " + random);
                $("#guessButton").hide();
                $("#playAgain").show();
            }
        }
        else if($("#guess").val() > max || $("#guess").val() < 1){
            console.log("invalid guess");
            let tries = previous;
            $("#result").text("Invalid guess! - Remaining tries: " + (allowedtries - tries));
        }
    });
    $("#playAgain").click(function(){
        $("#guessButton").show();
        $("#playAgain").hide();
        $("#result").text("");
        tries = 1;
        previous = 0;
        random = Math.floor(Math.random() * max) + 1;
    });
    $("#easy").click(function(){
        $("#guessButton").show();
        $("#playAgain").hide();
        $("#easy").hide();
        $("#medium").show();
        $("#hard").show();
        $("#result").text("");
        tries = 1;
        previous = 0;
        allowedtries = 5;
        max = 10;
        $("input").attr({
            "max" : max,
         });
        random = Math.floor(Math.random() * max) + 1;
    });
    $("#medium").click(function(){
        $("#guessButton").show();
        $("#playAgain").hide();
        $("#easy").show();
        $("#medium").hide();
        $("#hard").show();
        $("#result").text("");
        tries = 1;
        previous = 0;
        allowedtries = 3;
        max = 15;
        $("input").attr({
            "max" : max,
         });
        random = Math.floor(Math.random() * max) + 1;
    });
    $("#hard").click(function(){
        $("#guessButton").show();
        $("#playAgain").hide();
        $("#easy").show();
        $("#medium").show();
        $("#hard").hide();
        $("#result").text("");
        tries = 1;
        previous = 0;
        allowedtries = 3;
        max = 20;
        $("input").attr({
            "max" : max,
         });
        random = Math.floor(Math.random() * max) + 1;
    });
});
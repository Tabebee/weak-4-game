$(document).ready(function () {

    var wins = 0;
    var losses = 0;
    // var user = 0;
    var input = 0;

    var targetNum = Math.floor(Math.random() * 120) + 19;
    $("#target").html(targetNum);

    var blueCrystal = Math.floor(Math.random() * 12) + 1;
    var greenCrystal = Math.floor(Math.random() * 12) + 1;
    var redCrystal = Math.floor(Math.random() * 12) + 1;
    var yellowCrystal = Math.floor(Math.random() * 12) + 1;
    var user = 1;


    $("#blue").on("click", function () {
        blueCrystal;
        user++;
        console.log('user: ',user); 
        $("#user").html(user);
    });

    $("#green").on("click", function () {
        $("#user").html(greenCrystal);
        greenCrystal;
        console.log('user: ',greenCrystal);

    });

    $("#red").on("click", function () {
        $("#user").html(redCrystal);
        input = redCrystal
    });

    $("#yellow").on("click", function () {
        $("#user").html(yellowCrystal);
        input = yellowCrystal;
        console.log(user);
    });

    // *********** Log to Check if working***********************
    // console.log/blueCrystal);
    // console.log(greenCrystal);
    // console.log(redCrystal);
    // console.log(yellowCrystal);
    // console.log(user);
});
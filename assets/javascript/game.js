var wins = 0;
var losses = 0;
// var user = 0;

$(document).ready(function () {

//******************* Cant figure out why it keeps logging old user value when game restarts?
//******************* Only affects game if old user value is one click away from new target value
//******************* So after about 4 runs You will lose no matter what

    function start() {
        var user = 0;

        var targetNum = Math.floor(Math.random() * 100) + 19;
        $("#target").html(targetNum);

        var blueCrystal = Math.floor(Math.random() * 12) + 1;
        var greenCrystal = Math.floor(Math.random() * 12) + 1;
        var redCrystal = Math.floor(Math.random() * 12) + 1;
        var yellowCrystal = Math.floor(Math.random() * 12) + 1;


        $("#blue").on("click", function () {
            // blueCrystal;
            user += blueCrystal;
            console.log('user: ', user);
            $("#user").html(user);
        });

        $("#green").on("click", function () {
            // greenCrystal;
            user += greenCrystal;
            console.log('user: ', user);
            $("#user").html(user);

        });

        $("#red").on("click", function () {
            // redCrystal
            user += redCrystal;
            console.log('user: ', user);
            $("#user").html(user);
        });

        $("#yellow").on("click", function () {
            // yellowCrystal;
            user += yellowCrystal;
            console.log('user: ', user);
            $("#user").html(user);
        });

        // *********** Log to Check if working***********************
        console.log(blueCrystal);
        console.log(greenCrystal);
        console.log(redCrystal);
        console.log(yellowCrystal);
        console.log(user);
        console.log(targetNum);
        //************************************************************

        $(document).on("click", ".crystal", function () {
            if (user === targetNum) {
                alert("You win");
                wins++;
                $("#wins").html(wins);
                user = 0;
                start();
            }
            else if (user > targetNum) {
                alert("you lose");
                losses++;
                $("#losses").html(losses);
                user = 0;
                start();
            }
        });
    }
    start();
});
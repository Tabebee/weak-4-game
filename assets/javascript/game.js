// # Warning, not the best codes, but works. Take a look compare to what it was

var wins = 0;
var losses = 0;
// var user = 0;

$(document).ready(function () {


    //******************* Cant figure out why it keeps logging old user value when game restarts?
    //******************* Only affects game if old user value is one click away from new target value
    //******************* So after about 4 runs You will lose no matter what
    function start() {
        var user = 0;
        var crystals = 0;
        var value = 0;

        var targetNum = Math.floor(Math.random() * 102) + 19;

        $("#target").html(targetNum);

        function generateId() {
            var all_crystal = $(".crystal");

            for (var i = 0; i < all_crystal.length; i++) {
                var crystal_num = Math.floor(Math.random() * 12) + 1;
                $(all_crystal[i]).attr("data-id", crystal_num);
            }
        }

        generateId();


        // .attr("data-id", crystal_num)
        $(".crystal").on("click", function () {

            var num = parseInt($(this).attr("data-id"));
            value += num;
            console.log("Value: ", value);

            $("#user").html(value);

            if (value === targetNum) {
                crystals = 0;
                value = 0;
                targetNum = Math.floor(Math.random() * 102) + 19;
                alert("You win");
                wins++;
                $("#wins").html(wins);
                $("#user").html(value);
                $("#target").html(targetNum);

                generateId();

                // start();
            }
            else if (value > targetNum) {
                crystals = 0;
                value = 0;
                targetNum = Math.floor(Math.random() * 102) + 19;
                alert("you lose");
                losses++;
                $("#losses").html(losses);
                $("#user").html(value);
                $("#target").html(targetNum);

                generateId();
                // start();
            }

        });



        // *********** Log to Check if working***********************
        // console.log(blueCrystal);
        // console.log(greenCrystal);
        // console.log(redCrystal);
        // console.log(yellowCrystal);
        // console.log(user);
        // console.log(targetNum);
        //************************************************************
    }
    start();
});
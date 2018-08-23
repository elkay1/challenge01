

$(document).ready(function () {
            var X = "<i class='fa fa-times'>";
            var jet = "<i class='fa fa-fighter-jet'>";
            var bullseye = "<i class='fa fa-bullseye'></i>";
            var column_num;
            var row_num;
            var coordArr = [];
            let guess;
            let id = 1;
            let aiScore;
            let playerOneScore;
            let playerOne;
            let turnNumber;




            $("#startGame").on("click", function () {
                DrawBoard();
            });


            $(".board").on("click", "td", function () {

                //    row_num = parseInt($(this).parent().index()) + 1;
                //    column_num = parseInt($(this).index()) + 1;

                coordArr.push(parseInt($(this).attr("id")));
                //
                //
                //    console.log(coordArr);

                if ($(this).html(bullseye)) {
                    $(this).html(jet);
                };
            });




            $("#restartGame").on("click", function () {
                ClearBoard();
            })



            $("#fightMe").on("click", function () {
                playerOne = $("#playerOneName").val();

                guess = Math.floor((Math.random() * 100) + 1);
                //console.log(guess);
                for (var i = 1; i < coordArr.length; i++) {
                    //        $("#recentRow").html(`Recent Row: ${row_num}`);       $("#recentCol").html(`Recent Column: ${column_num}`);
                    if (guess === coordArr[i]) {
                        console.log(coordArr[i]);
                        $(`#${coordArr[i]}`).html(X);
                        aiScore += 10;
                        $("#aiScore").html("<p> AI's Score: </p>" + aiScore);
                        break;
                    } else {
                        playerOneScore++;
                        $("#playerone").html("<p>" + playerOne + "'s Score: </p>" + playerOneScore);
                        break;
                    }
                }
                $("#tdRolled").html(`The number rolled is ${guess}`);
            });

            function DrawBoard() {
                let mytable = "<table class='mytable'><tbody>";
                aiScore = 0;
                playerOneScore = 0;
                playerOne = $("#playerOneName").val();

                $("#playerone").html("<p>" + playerOne + "'s Score: </p>" + playerOneScore);
                $("#aiScore").html("<p> AI's Score: </p>" + aiScore);

                for (var i = 1; i < 11; i++) {
                    mytable += "<tr>";

                    for (var j = 1; j < 11; j++) {
                        mytable += "<td id=" + id + ">" + bullseye + "</td>";
                        id++;
                    }
                }
                mytable += "</tbody></table>";
                $(".board").html(mytable);

            };

            function ClearBoard() {
                let mytable = "<table class='mytable'><tbody>";

                $("#playerone").html("");
                $("#aiScore").html("");
                $("#recent").html("");
                $("#tdRolled").html("");
                coordArr = [];
                for (var i = 1; i < 11; i++) {
                    mytable += "<tr>";
                    for (var j = 1; j < 11; j++) {
                        mytable += "<td>" + bullseye + "</td>";
                    }
                }
                mytable += "</tbody></table>";
                $(".board").html(mytable);

            };
});



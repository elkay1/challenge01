

function DrawBoard(){
var playerOne = $("#playerOneName").val();
var playerTwo = $("#playerTwoName").val();
    let mytable = "<table class='mytable'><tbody>";


    $("#playeronescore").html("<p>" + playerOne + "'s Score: </p>");
    console.log(playerOne);
    $("#playertwoscore").html("<p>" + playerTwo + "'s Score: </p>");
    console.log(playerTwo);

    for (var i = 1; i < 11; i++) {
        mytable += "<tr>";
        for (var j = 1; j < 11; j++) {
            mytable += "<td>" + "<i class='fa fa-bullseye'></i>" + "</td>";
        }
    }
    mytable += "</tbody></table>";
    $(".board").html(mytable);
};
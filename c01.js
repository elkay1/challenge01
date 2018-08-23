var X = "<div class='cross1'></div><div class='cross2'></div>";
let playerOne = $("#playerOneName").val();

$(document).ready(function(){
$("#startGame").on("click", function(){
   DrawBoard(); 
});





});
function DrawBoard(){
let mytable = "<table class='mytable'><tbody>";


    $("#playerone").html("<p>" + playerOne + "'s Score: </p>");
    console.log(playerOne);
    $("#aiScore").html("<p> AI's Score: </p>");

    for (var i = 1; i < 11; i++) {
        mytable += "<tr>";
        for (var j = 1; j < 11; j++) {
            mytable += "<td>" + "<i class='fa fa-bullseye'></i>" + "</td>";
        }
    }
    mytable += "</tbody></table>";
    $(".board").html(mytable);
};
var X = "<div class='cross1'></div><div class='cross2'></div>";
var jet = "<i class='fa fa-fighter-jet'>";
var bullseye = "<i class='fa fa-bullseye'></i>";
$(document).ready(function(){

$("#startGame").on("click", function(){
   DrawBoard(); 
});

    
$(".board").on("click", "td", function () {

    if ($(this).html(bullseye)){
        $(this).html(jet);
    };
    });    
$("#restartGame").on("click", function(){
    ClearBoard();
})

});



//    if ((this).innerHTML == ) {
//        $(this).addClass("selected");
//        if (playerOneTurn == true) {
//            $("#scoreone").html(playerOneScore);
//            playerOneScore++;
//            console.log(playerOneScore);
//        } else {
//            $("#scoretwo").html(playerTwoScore);
//            playerTwoScore++;
//            console.log(playerTwoScore);
//        }

//    } 

function DrawBoard(){
let mytable = "<table class='mytable'><tbody>";
let playerOne = $("#playerOneName").val();


    $("#playerone").html("<p>" + playerOne + "'s Score: </p>");
    console.log(playerOne);
    $("#aiScore").html("<p> AI's Score: </p>");

    for (var i = 1; i < 11; i++) {
        mytable += "<tr>";
        for (var j = 1; j < 11; j++) {
            mytable += "<td>" + bullseye + "</td>";
        }
    }
    mytable += "</tbody></table>";
    $(".board").html(mytable);
};

function ClearBoard(){
    let mytable = "<table class='mytable'><tbody>";

    $("#playerone").html("");
    $("#aiScore").html("");
    $("#recent").html("");
        for (var i = 1; i < 11; i++) {
        mytable += "<tr>";
        for (var j = 1; j < 11; j++) {
            mytable += "<td>" + bullseye + "</td>";
        }
    }
    mytable += "</tbody></table>";
    $(".board").html(mytable);
}

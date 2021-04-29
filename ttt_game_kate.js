alert("I am reading this file...");

var button = document.querySelectorAll(".btn");

alert("There are " + button.length + " buttons");

var winAlert = document.getElementById("textline");
var p1Win = "Player 1 Wins!"
var p2Win = "Player 2 Wins!"
var aTie = "It's a Cat's Game!"

var playerTurn = 0;
var SYMBOLS = ["X" , "O"];
// Setting DOM to all buttons

function myGame() {
    var b1, b2, b3, b4, b5, b6, b7, b8, b9, b00;
    b1 = document.getElementById("b1").value;
    b2 = document.getElementById("b2").value;
    b3 = document.getElementById("b3").value;
    b4 = document.getElementById("b4").value;
    b5 = document.getElementById("b5").value;
    b6 = document.getElementById("b6").value;
    b7 = document.getElementById("b7").value;
    b8 = document.getElementById("b8").value;
    b9 = document.getElementById("b9").value;
    b00 = document.getElementById("b00").value;

    if ((b1 == X) && (b2 == X) && (b3 == X)) {
        winAlert.innerHTML = p1Win;
        b4.disabled=true;
        b5.disabled=true;
        b6.disabled=true;
        b7.disabled=true;
        b8.disabled=true;
        b9.disabled=true;
        alert(p1Win);
    };

    else if ((b4 == X) && (b5 == X) && (b6 == X)) {
    winAlert.innerHTML = p1Win;
    b1.disabled=true;
    b2.disabled=true;
    b3.disabled=true;
    b7.disabled=true;
    b8.disabled=true;
    b9.disabled=true;
    alert(p1Win);
    };
/*
    else if ((b7 == X) && (b8 == X) && (b9 == X)) {
        winAlert.innerHTML = p1Win;
        b.disabled=true;
        b.disabled=true;
        b.disabled=true;
        b.disabled=true;
        b.disabled=true;
        b.disabled=true;
        alert(p1Win);
        };

        else if ((b == X) && (b == X) && (b == X)) {
        winAlert.innerHTML = p1Win;
        b.disabled=true;
        b.disabled=true;
        b.disabled=true;
        b.disabled=true;
        b.disabled=true;
        b.disabled=true;
        alert(p1Win);
        };
}




alert("You're good to go!");


*/

};
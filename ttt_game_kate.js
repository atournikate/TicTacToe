//create an Array with names of the boxes/buttons (i.e. b1, b2, b3, etc.)
var boxID = [];
var buttonNames = document.querySelectorAll('.box .btn');

for (var i = 0; i < buttonNames.length; i++) {
    boxID.push(buttonNames[i].getAttribute('id'));
}

var winCrit = [
    ["b1", "b2", "b3"],
    ["b4", "b5", "b6"],
    ["b7", "b8", "b9"],
    ["b1", "b4", "b7"],
    ["b2", "b5", "b8"],
    ["b3", "b6", "b9"],
    ["b1", "b5", "b9"],
    ["b3", "b5", "b7"]
 ]

var tickBox = 0; //not connected yet...

/*alert("We have " + boxID.length + " buttons. Box 1 is named " + boxID[0] + " Box 2 is named " + boxID[1]); //check that Array is working = yes
*/

//Alternate players and symbols - DO NOT CHANGE
var player = "X";

function turnChange(id) {
    if (document.getElementById(id).innerHTML == "") {
    
        if (player == "X") {
            document.getElementById(id).innerHTML = "X";
            document.getElementById("textline").innerHTML = "Player 2's turn!";
            player = "O";
            tickBox++;
            winCriteria(player);
        }
        else {
            document.getElementById(id).innerHTML = "O";
            document.getElementById("textline").innerHTML = "Player 1's turn!";
            player = "X";
            tickBox++;
            winCriteria(player);
        }
    }

    if (tickBox > document.querySelectorAll('.box .btn')) {
        winCriteria();
    }
};

function resetMe() {
    location.reload();
}

var p1Win = "Player 1 wins!"
var p2Win = "Player 2 wins!"
var aTie = "Cat's Game!"

//trying to complete the winning criteria - not quite finished here...
function winCriteria() {
    for (var x = 0; x < winCrit.length; x++) {
        console.log(winCrit[x]);
        var winCombo = winCrit[x];
        var win1 = document.getElementById(winCombo[0]).innerHTML;
        var win2 = document.getElementById(winCombo[1]).innerHTML;
        var win3 = document.getElementById(winCombo[2]).innerHTML;
        var win4 = document.getElementById(winCombo[3]).innerHTML;
        var win5 = document.getElementById(winCombo[4]).innerHTML;
        var win6 = document.getElementById(winCombo[5]).innerHTML;
        var win7 = document.getElementById(winCombo[6]).innerHTML;
        var win8 = document.getElementById(winCombo[7]).innerHTML;

        /*if ((win1 == win2) && (win2 == win3) && (win1 != "") && (win2 != "") && (win3 != "")) {
            document.getElementsByClassName("textline").innerHTML = p1Win
        }*/
    }
}


//End alternate players

/*


//winning criteria and alerts - need to connect this to a winning condition in the html... ????
var p1Win = "Player 1 wins!"
var p2Win = "Player 2 wins!"
var aTie = "Cat's Game!"


function winCriteria() {
    

    if ((boxID[0, 1, 2].innerHTML == "X") || (boxID[3, 4, 5].innerHTML == "X") || 
    (boxID[6, 7, 8].innerHTML == "X") || (boxID[0, 4, 8].innerHTML == "X") || 
    (boxID[2, 4, 6].innerHTML == "X") || (boxID[0, 3, 6].innerHTML == "X") || 
    (boxID[1, 4, 7].innerHTML == "X") || (boxID[2, 5, 8].innerHTML == "X")) {
        
        alert(p1Win);
        console.log("Player1 wins");
    }
    else if ((boxID[0, 1, 2].innerHTML == "O") || (boxID[3, 4, 5].innerHTML == "O") || 
    (boxID[6, 7, 8].innerHTML == "O") || (boxID[0, 4, 8].innerHTML == "O") || 
    (boxID[2, 4, 6].innerHTML == "O") || (boxID[0, 3, 6].innerHTML == "O") || 
    (boxID[1, 4, 7].innerHTML == "O") || (boxID[2, 5, 8].innerHTML == "O")) {
        document.getElementsByClassName("textline").innerHTML = "Player 2 Wins!!!"
        alert(p2Win);
    }
    else if ((boxID[0, 1, 2].innerHTML == "X" || "O") && (boxID[3, 4, 5].innerHTML == "X" || "O") &&
    (boxID[6, 7, 8].innerHTML == "X" || "O") && (boxID[0, 4, 8].innerHTML == "X" || "O") && 
    (boxID[2, 4, 6].innerHTML ==  "X" || "O") && (boxID[0, 3, 6].innerHTML ==  "X" || "O") && 
    (boxID[1, 4, 7].innerHTML ==  "X" || "O") && (boxID[2, 5, 8].innerHTML == "X" || "O")) {
        document.getElementsByClassName("textline").innerHTML = "It's a Cat's Game!"
        alert(aTie);
    }
};


*/
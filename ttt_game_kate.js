alert("I am reading this file..."); //Test JS

//create an Array with names of the boxes/buttons (i.e. b1, b2, b3, etc.)
var boxID = [];
var buttonNames = document.querySelectorAll('.box .btn');
var buttonAll = document.querySelectorAll('.btn');

for (var i = 0; i < buttonNames.length; i++) {
    boxID.push(buttonNames[i].getAttribute('id'));
}

alert("We have " + boxID.length + "buttons. Box 1 is named " + boxID[0] + " Box 2 is named " + boxID[1]); //check that Array is working = yes

//winning criteria and alerts - need to connect this to a winning condition in the html... ????
var p1Win = "Player 1 wins!"
var p2Win = "Player 2 wins!"
var aTie = "Cat's Game!"

function winCriteria() {
    

    if ((boxID[0, 1, 2].innerHTML == "X") || (boxID[3, 4, 5].innerHTML == "X") || 
    (boxID[6, 7, 8].innerHTML == "X") || (boxID[0, 4, 8].innerHTML == "X") || 
    (boxID[2, 4, 6].innerHTML == "X") || (boxID[0, 3, 6].innerHTML == "X") || 
    (boxID[1, 4, 7].innerHTML == "X") || (boxID[2, 5, 8].innerHTML == "X")) {
        document.getElementsByClassName("textline").innerHTML = "Player 1 Wins!!!"
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


//Alternate players and symbols - DO NOT CHANGE
var player = "X";

function turnChange(id) {
    
    if (player == "X") {
        document.getElementsByClassName("textline").innerHTML = "Player 2's turn!";
        document.getElementById(id).innerHTML = "X";
        document.getElementById(id).disabled = true;
        player = "O";
    }
    else {
        document.getElementById(id).innerHTML = "O";
        document.getElementsByClassName("textline").innerHTML = "Player 1's turn!";
        document.getElementById(id).disabled = true;
        player = "X";
    }

    winCriteria();

};
//End alternate players






alert("You're good to go!"); //JS read through the whole document.
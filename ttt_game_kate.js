alert("I am reading this file...");



var button = document.querySelectorAll(".btn");

alert("There are " + button + " buttons");


alert("You're goood to go!");

/* 
/ 

var playerTurn = 0;
var NUM_COLS = 3;
var NUM_ROWS = 3;
var SYMBOLS = ["X", "O"];

var tiles = [];

var checkWin = function() {
    
};

var Tile = function(x, y) {
    this.x = x;
    this.y = y;
    this.size = width/NUM_COLS;
    this.label = "";
};

Tile.prototype.draw = function() {
    fill(214, 247, 202);
    strokeWeight(2);
    rect(this.x, this.y, this.size, this.size, 10);
    textSize(100);
    textAlign(CENTER, CENTER);
    fill(0, 0, 0);
    text(this.label, this.x+this.size/2, this.y+this.size/2);
};

Tile.prototype.empty = function() {
    return this.label === "";
};

Tile.prototype.onClick = function(x, y) {
    // If the tile is not empty, exit the function
    if (!this.empty()) {
        return;
    }
    // Put the player's symbol on the tile
    this.label = SYMBOLS[playerTurn];
    // Change the turn
    playerTurn++;
    if (playerTurn >= SYMBOLS.length) {
        playerTurn = 0;
    }
};

Tile.prototype.handleMouseClick = function(x, y) {
    // Check for mouse clicks inside the tile
    if ( x >= this.x && x <= this.x + this.size && y >= this.y && y <= this.y + this.size) {
        this.onClick();
    }
};

for (var i = 0; i < NUM_COLS; i++) {
    for (var j = 0; j < NUM_ROWS; j++) {
        tiles.push(new Tile(i * (width/NUM_COLS-1), j * (height/NUM_ROWS-1)));
    }
}

var drawTiles = function() {
    for (var i in tiles) {
        tiles[i].draw();
    }
};

mouseReleased = function() {
    for (var i in tiles) {
        tiles[i].handleMouseClick(mouseX, mouseY);
    }
};

draw = function() {
    background(143, 143, 143);
    drawTiles();
};



Function called whenever user tab on any box
function myfunc() {
  
    // Setting DOM to all boxes or input field
    var b1, b1, b3, b4, b5, b6, b7, b8, b9;
    b1 = document.getElementById("b1").value;
    b2 = document.getElementById("b2").value;
    b3 = document.getElementById("b3").value;
    b4 = document.getElementById("b4").value;
    b5 = document.getElementById("b5").value;
    b6 = document.getElementById("b6").value;
    b7 = document.getElementById("b7").value;
    b8 = document.getElementById("b8").value;
    b9 = document.getElementById("b9").value;
  
    // Checking if Player X won or not and after 
    // that disabled all the other fields
    if ((b1 == 'x' || b1 == 'X') && (b2 == 'x' ||
        b2 == 'X') && (b3 == 'x' || b3 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        window.alert('Player X won');
    }
    else if ((b1 == 'x' || b1 == 'X') && (b4 == 'x' ||
        b4 == 'X') && (b7 == 'x' || b7 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
  
        window.alert('Player X won');
    }
    else if ((b7 == 'x' || b7 == 'X') && (b8 == 'x' || 
        b8 == 'X') && (b9 == 'x' || b9 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        window.alert('Player X won');
    }
    else if ((b3 == 'x' || b3 == 'X') && (b6 == 'x' || 
        b6 == 'X') && (b9 == 'x' || b9 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        window.alert('Player X won');
    }
    else if ((b1 == 'x' || b1 == 'X') && (b5 == 'x' || 
        b5 == 'X') && (b9 == 'x' || b9 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        window.alert('Player X won');
    }
    else if ((b3 == 'x' || b3 == 'X') && (b5 == 'x' || 
        b5 == 'X') && (b7 == 'x' || b7 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        window.alert('Player X won');
    }
    else if ((b2 == 'x' || b2 == 'X') && (b5 == 'x' || 
        b5 == 'X') && (b8 == 'x' || b8 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("b1").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b9").disabled = true;
        window.alert('Player X won');
    }
    else if ((b4 == 'x' || b4 == 'X') && (b5 == 'x' || 
        b5 == 'X') && (b6 == 'x' || b6 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        window.alert('Player X won');
    }
  
    // Checking of Player X finsh
    // Checking for Player 0 starts, Is player 0 won or
    // not and after that disabled all the other fields
    else if ((b1 == '0' || b1 == '0') && (b2 == '0' || 
        b2 == '0') && (b3 == '0' || b3 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        window.alert('Player 0 won');
    }
    else if ((b1 == '0' || b1 == '0') && (b4 == '0' || 
        b4 == '0') && (b7 == '0' || b7 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        window.alert('Player 0 won');
    }
    else if ((b7 == '0' || b7 == '0') && (b8 == '0' || 
        b8 == '0') && (b9 == '0' || b9 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        window.alert('Player 0 won');
    }
    else if ((b3 == '0' || b3 == '0') && (b6 == '0' || 
        b6 == '0') && (b9 == '0' || b9 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        window.alert('Player 0 won');
    }
    else if ((b1 == '0' || b1 == '0') && (b5 == '0' || 
        b5 == '0') && (b9 == '0' || b9 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        window.alert('Player 0 won');
    }
    else if ((b3 == '0' || b3 == '0') && (b5 == '0' || 
        b5 == '0') && (b7 == '0' || b7 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        window.alert('Player 0 won');
    }
    else if ((b2 == '0' || b2 == '0') && (b5 == '0' || 
        b5 == '0') && (b8 == '0' || b8 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("b1").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b9").disabled = true;
        window.alert('Player 0 won');
    }
    else if ((b4 == '0' || b4 == '0') && (b5 == '0' || 
        b5 == '0') && (b6 == '0' || b6 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        window.alert('Player 0 won');
    }
  
    // Checking of Player 0 finsh
    // Here, Checking about Tie
    else if ((b1 == 'X' || b1 == '0') && (b2 == 'X' 
        || b2 == '0') && (b3 == 'X' || b3 == '0') && 
        (b4 == 'X' || b4 == '0') && (b5 == 'X' || 
        b5 == '0') && (b6 == 'X' || b6 == '0') && 
        (b7 == 'X' || b7 == '0') && (b8 == 'X' || 
        b8 == '0') && (b9 == 'X' || b9 == '0')) {
            document.getElementById('print')
                .innerHTML = "Match Tie";
            window.alert('Match Tie');
    }
    else {
  
        // Here, Printing Result
        if (flag == 1) {
            document.getElementById('print')
                .innerHTML = "Player X Turn";
        }
        else {
            document.getElementById('print')
                .innerHTML = "Player 0 Turn";
        }
    }
}
  
// Function to reset game
function myfunc_2() {
    location.reload();
    document.getElementById('b1').value = '';
    document.getElementById("b2").value = '';
    document.getElementById("b3").value = '';
    document.getElementById("b4").value = '';
    document.getElementById("b5").value = '';
    document.getElementById("b6").value = '';
    document.getElementById("b7").value = '';
    document.getElementById("b8").value = '';
    document.getElementById("b9").value = '';
  
}
  
// Here onwards, functions check turn of the player 
// and put accordingly value X or 0
flag = 1;
function myfunc_3() {
    if (flag == 1) {
        document.getElementById("b1").value = "X";
        document.getElementById("b1").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b1").value = "0";
        document.getElementById("b1").disabled = true;
        flag = 1;
    }
}
  
function myfunc_4() {
    if (flag == 1) {
        document.getElementById("b2").value = "X";
        document.getElementById("b2").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b2").value = "0";
        document.getElementById("b2").disabled = true;
        flag = 1;
    }
}
  
function myfunc_5() {
    if (flag == 1) {
        document.getElementById("b3").value = "X";
        document.getElementById("b3").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b3").value = "0";
        document.getElementById("b3").disabled = true;
        flag = 1;
    }
}
  
function myfunc_6() {
    if (flag == 1) {
        document.getElementById("b4").value = "X";
        document.getElementById("b4").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b4").value = "0";
        document.getElementById("b4").disabled = true;
        flag = 1;
    }
}
  
function myfunc_7() {
    if (flag == 1) {
        document.getElementById("b5").value = "X";
        document.getElementById("b5").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b5").value = "0";
        document.getElementById("b5").disabled = true;
        flag = 1;
    }
}
  
function myfunc_8() {
    if (flag == 1) {
        document.getElementById("b6").value = "X";
        document.getElementById("b6").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b6").value = "0";
        document.getElementById("b6").disabled = true;
        flag = 1;
    }
}
  
function myfunc_9() {
    if (flag == 1) {
        document.getElementById("b7").value = "X";
        document.getElementById("b7").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b7").value = "0";
        document.getElementById("b7").disabled = true;
        flag = 1;
    }
}
  
function myfunc_10() {
    if (flag == 1) {
        document.getElementById("b8").value = "X";
        document.getElementById("b8").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b8").value = "0";
        document.getElementById("b8").disabled = true;
        flag = 1;
    }
}
  
function myfunc_11() {
    if (flag == 1) {
        document.getElementById("b9").value = "X";
        document.getElementById("b9").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b9").value = "0";
        document.getElementById("b9").disabled = true;
        flag = 1;
    }
}
*/




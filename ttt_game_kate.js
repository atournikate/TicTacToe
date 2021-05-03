alert("I am reading this file..."); //Test JS

var player = "X";

function turnChange(id) {
    
    if (player == "X") {
        document.getElementById(id).innerHTML = "X";
        player = "O";

    }
    else {
        document.getElementById(id).innerHTML = "O";
        player = "X";
        console.log(player);
    }
}

var announcement = document.getElementById('textline').value;




// Setting DOM to all buttons
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



function myGame() {
    
    //Player 1 win criteria
    if ((b1 == X) && (b2 == X) && (b3 == X)) {
        winAlert.innerHTML = p1Win;
        b4.disabled=true;
        b5.disabled=true;
        b6.disabled=true;
        b7.disabled=true;
        b8.disabled=true;
        b9.disabled=true;
        alert(p1Win);
    }

    else if ((b4 == X) && (b5 == X) && (b6 == X)) {
        winAlert.innerHTML = p1Win;
        b1.disabled=true;
        b2.disabled=true;
        b3.disabled=true;
        b7.disabled=true;
        b8.disabled=true;
        b9.disabled=true;
        alert(p1Win);
    }


    else if ((b7 == X) && (b8 == X) && (b9 == X)) {
        winAlert.innerHTML = p1Win;
        b1.disabled=true;
        b2.disabled=true;
        b3.disabled=true;
        b4.disabled=true;
        b5.disabled=true;
        b6.disabled=true;
        alert(p1Win);
        }

    else if ((b1 == X) && (b5 == X) && (b9 == X)) {
        winAlert.innerHTML = p1Win;
        b2.disabled=true;
        b3.disabled=true;
        b4.disabled=true;
        b6.disabled=true;
        b7.disabled=true;
        b8.disabled=true;
        alert(p1Win);
    }

    else if ((b3 == X) && (b5 == X) && (b7 == X)) {
        winAlert.innerHTML = p1Win;
        b1.disabled=true;
        b2.disabled=true;
        b4.disabled=true;
        b6.disabled=true;
        b8.disabled=true;
        b9.disabled=true;
        alert(p1Win);
        }

    //Player 2 win criteria
    else if ((b1 == O) && (b2 == O) && (b3 == O)) {
        winAlert.innerHTML = p2Win;
        b4.disabled=true;
        b5.disabled=true;
        b6.disabled=true;
        b7.disabled=true;
        b8.disabled=true;
        b9.disabled=true;
        alert(p2Win);
        }

    else if ((b4 == O) && (b5 == O) && (b6 == O)) {
        winAlert.innerHTML = p2Win;
        b1.disabled=true;
        b2.disabled=true;
        b3.disabled=true;
        b7.disabled=true;
        b8.disabled=true;
        b9.disabled=true;
        alert(p2Win);
        }

    else if ((b7 == O) && (b8 == O) && (b9 == O)) {
        winAlert.innerHTML = p2Win;
        b1.disabled=true;
        b2.disabled=true;
        b3.disabled=true;
        b4.disabled=true;
        b5.disabled=true;
        b6.disabled=true;
        alert(p2Win);
        }

    else if ((b1 == O) && (b5 == O) && (b9 == O)) {
        winAlert.innerHTML = p2Win;
        b2.disabled=true;
        b3.disabled=true;
        b4.disabled=true;
        b6.disabled=true;
        b7.disabled=true;
        b8.disabled=true;
        alert(p2Win);
        }

    else if ((b3 == O) && (b5 == O) && (b7 == O)) {
        winAlert.innerHTML = p2Win;
        b1.disabled=true;
        b2.disabled=true;
        b4.disabled=true;
        b6.disabled=true;
        b7.disabled=true;
        b8.disabled=true;
        alert(p2Win);
        }

    //Tie criteria

    else if ((b1 == X || b1 == O) && (b2 == X || b2 == O) && 
    (b3 == X || b3 == O) && (b4 == X || b4 == O) && (b5 == X || b5 == O)
    && (b6 == X || b6 == O) && (b7 == X || b7 == O) && (b8 == X || b8 == O)
    && (b9 == X || b9 == O)) {
        winAlert.innerHTML = aTie;
        alert(aTie);
    }

    else {
        document.getElementById('textline').innerHTML = "Next player click a box!"

    }
};



alert("You're good to go!");
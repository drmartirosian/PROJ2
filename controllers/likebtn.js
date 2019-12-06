
/*------------ constants --------------*/
const win = [                  //possible win scenarios...
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],

    [1, 4, 7],
    [2, 5, 8],
    [7, 8, 9],

    [1, 5, 9],
    [3, 5, 7],
];

/*----- app's state (variables) -------*/
var turn = []; //number of turns in game...
var playerO = []; //
var playerX = []; //

/*----- cached element references -----*/
//TILE BUTTONS
const tileAll = document.querySelectorAll('.tiles');
const content = document.getElementById('message'); //for message...

/*------------ event listeners ---------*/
//LISTENER FOR CLICK
tileAll.forEach(element => {
    element.addEventListener('click', tileClick);
});

/*------------ functions ----------------*/
//STATES OF GAMEPLAY...
function tileClick(event) {
    turn.push(''); //+1 to turn array per click
    let tileLabeler = event.target;

    //PLAYER1
    if (turn.length % 2 !== 0 && turn.length <= 9) { 
        message.textContent = "PLAYER2'S TURN!";
        tileLabeler.innerHTML = "X";
        playerX.push(parseInt(tileLabeler.id));
        playerX.sort();
        //PLAYER X win conditions
        let win = checkWin(playerX);
        if (win) {
        message.textContent = "Player-1 Won!";
    }
    } else { //PLAYER2
        message.textContent = "PLAYER1'S TURN!";
        tileLabeler.innerHTML = "O";
        playerO.push(parseInt(tileLabeler.id));
        playerO.sort();

        //PLAYER O win conditions
        let win = checkWin(playerO);
        if (win) {
        message.textContent = ("Player-2 Won!");
        }
    }
    if (turn.length >= 9) {
        return message.textContent = "GAME OVER!"
    }
};

function checkWin(playerArray) {
    return win.some((winArray) => winArray.every((winNumber) => playerArray.includes(winNumber)));
}





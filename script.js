const newBoard = (function () {
    return board = [ , , , , , , , , ,];
});


function createPlayer (name, marker) { return { name, marker, } }

function playGame () {
    let gameboard = newBoard();
    let activePlayer = player1;
    let turnCount = 1;
    let gameover = false;

    displayBoard();

    const squares = document.querySelectorAll('.square');
    for (i = 0; i < squares.length; i++) {
        squares[i].addEventListener('click', (e) => {
            playRound(e.target.id);
        });
    }

    const resetButton = document.querySelector('#reset-button');
    resetButton.addEventListener('click', (e) => {
        resetGame();
    })

    const resetGame = () => {
        for (i = 0; i < 9; i++) {
            gameboard.splice(i, 1, undefined);
        }
        console.log(gameboard);
        displayBoard().drawMarkers();
        turnCount = 1;
        gameover = false;
        displayBoard().displayTurn(activePlayer);
        
    }

    const isOccupied = (place) => {
        if (gameboard[place] !== undefined) {
            return true;
        } else {
            return false;
        }
    }
    const placeMarker = (marker, place) => {
        gameboard.splice(place, 1, marker);
        displayBoard().drawMarkers(gameboard);
        console.log(gameboard); //---for testing---//
    }
    const turnCounter = () => { turnCount++; }
    const rotateActivePlayer = () => {
        if (activePlayer == player1) {
            activePlayer = player2;
        } else {
            activePlayer = player1;
        }
        displayBoard().displayTurn(activePlayer);
    }
    const checkForWin = (marker) => {

        if (gameboard[0] === marker &&
            gameboard[1] === marker &&
            gameboard[2] === marker ||

            gameboard[3] === marker &&
            gameboard[4] === marker &&
            gameboard[5] === marker ||

            gameboard[6] === marker &&
            gameboard[7] === marker &&
            gameboard[8] === marker ||

            gameboard[0] === marker &&
            gameboard[3] === marker &&
            gameboard[6] === marker ||

            gameboard[1] === marker &&
            gameboard[4] === marker &&
            gameboard[7] === marker ||

            gameboard[2] === marker &&
            gameboard[5] === marker &&
            gameboard[8] === marker ||

            gameboard[0] === marker &&
            gameboard[4] === marker &&
            gameboard[8] === marker ||

            gameboard[2] === marker &&
            gameboard[4] === marker &&
            gameboard[6] === marker ) {
                return true;
            } else {
                return false;
            }
    }

    const playRound = (getPlace) => {
        if (isOccupied(getPlace)) { return console.log('error, occupied space'); }
        
        if (gameover) { return; }
        placeMarker(activePlayer.marker, getPlace);

        if (checkForWin(activePlayer.marker)) {
            console.log(`---${activePlayer.name} wins!!---`);
            gameover = true;
            return console.log(`gameover = ${gameover}`);
        } else if (turnCount === 9) {
            console.log(`---Stalemate: No One Wins---`);
            gameover = true;
            return console.log(`gameover = ${gameover}`);
        }

        rotateActivePlayer();
        turnCounter();
    }



    return {
        playRound,
        gameboard,
        activePlayer,
        resetGame
    };
}

function displayBoard() {
    const displayP1Name = document.querySelector('#player1-name');
    const displayP2Name = document.querySelector('#player2-name');
    const displayP1Marker = document.querySelector('#player1-marker');
    const displayP2Marker = document.querySelector('#player1-marker');

    displayP1Name.textContent = player1.name;
    displayP2Name.textContent = player2.name;
    displayP1Marker.textContent = `marker: ${player1.marker}`;
    displayP2Marker.textContent = `marker: ${player2.marker}`;

    const displayTurn = (activePlayer) => {
        const displayNextTurn = document.querySelector('#display-next-turn');
        displayNextTurn.textContent = activePlayer.marker;
    }

    const squares = document.querySelectorAll('.square');

    const drawMarkers = () => {
        squares[0].textContent = newgame.gameboard[0];
        squares[1].textContent = newgame.gameboard[1];
        squares[2].textContent = newgame.gameboard[2];

        squares[3].textContent = newgame.gameboard[3];
        squares[4].textContent = newgame.gameboard[4];
        squares[5].textContent = newgame.gameboard[5];
        
        squares[6].textContent = newgame.gameboard[6];
        squares[7].textContent = newgame.gameboard[7];
        squares[8].textContent = newgame.gameboard[8];
    }

    return { 
        drawMarkers,
        displayTurn,
     };
}


const player1 = createPlayer('Wallace', 'x');
const player2 = createPlayer('Grommit', 'o');

let newgame = playGame();
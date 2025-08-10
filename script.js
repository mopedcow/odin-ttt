/*
const newBoard = (function () {
    let row0 = ['n', 'n', 'n'];
    let row1 = ['n', 'n', 'n'];
    let row2 = ['n', 'n', 'n'];
    return {row0, row1, row2};
}); */

const newBoard = (function () {
    return board = [ , , , , , , , , ,];
});


function createPlayer (name, marker) { return { name, marker, } }

function playGame () {
    const gameboard = newBoard();
    
    let activePlayer = player1;
    let turnCount = 1;

    const squares = document.querySelectorAll('.square');
    for (i = 0; i < squares.length; i++) {
        squares[i].addEventListener('click', (e) => {
            console.log(e.target);
            //which gameboard space does square[i] point to?
            //splice activePlayer.marker into square[i]'s place in newgame.gameboard
        });
    }

    const isOccupied = (place) => {
        /*if (gameboard[row][col] !== 'n') {
            return true;
        } else {
            return false;
        }*/
        if (gameboard[place] !== undefined) {
            return true;
        } else {
            return false;
        }
    }
    const placeMarker = (marker, place) => {
        gameboard.splice(place, 1, marker);
        console.log(gameboard);
    }
    const turnCounter = () => { turnCount++; }
    const rotateActivePlayer = () => {
        if (activePlayer == player1) {
            return activePlayer = player2;
        } else {
            return activePlayer = player1;
        }
    }
    const checkForWin = (marker) => {

        if (gameboard[1] === marker &&
            gameboard[2] === marker &&
            gameboard[3] === marker ||

            gameboard[4] === marker &&
            gameboard[5] === marker &&
            gameboard[6] === marker ||

            gameboard[7] === marker &&
            gameboard[8] === marker &&
            gameboard[9] === marker ||

            gameboard[1] === marker &&
            gameboard[4] === marker &&
            gameboard[7] === marker ||

            gameboard[2] === marker &&
            gameboard[5] === marker &&
            gameboard[8] === marker ||

            gameboard[3] === marker &&
            gameboard[6] === marker &&
            gameboard[9] === marker ||

            gameboard[0] === marker &&
            gameboard[5] === marker &&
            gameboard[9] === marker ||

            gameboard[3] === marker &&
            gameboard[5] === marker &&
            gameboard[7] === marker ) {
                return true;
            } else {
                return false;
            }
        /*
        if (gameboard.row0[0] === marker &&
            gameboard.row1[0] === marker &&
            gameboard.row2[0] === marker ||

            gameboard.row0[1] === marker &&
            gameboard.row1[1] === marker &&
            gameboard.row2[1] === marker ||

            gameboard.row0[2] === marker &&
            gameboard.row1[2] === marker &&
            gameboard.row2[2] === marker ||

            gameboard.row0[0] === marker &&
            gameboard.row0[1] === marker &&
            gameboard.row0[2] === marker ||

            gameboard.row1[0] === marker &&
            gameboard.row1[1] === marker &&
            gameboard.row1[2] === marker ||

            gameboard.row2[0] === marker &&
            gameboard.row2[1] === marker &&
            gameboard.row2[2] === marker ||

            gameboard.row0[0] === marker &&
            gameboard.row1[1] === marker &&
            gameboard.row2[2] === marker ||

            gameboard.row0[2] === marker &&
            gameboard.row1[1] === marker &&
            gameboard.row2[0] === marker ) {
                return true;
            } else {
                return false;
            } */
    }

    const playRound = (getPlace) => {
        //getRow = `row${getRow}`;

        if (isOccupied(getPlace)) { return console.log('error, occupied space'); }
        
        placeMarker(activePlayer.marker, getPlace);
        //displayBoard().drawMarkers();

        if (checkForWin(activePlayer.marker)) {
            console.log(`---${activePlayer.name} wins!!---`);
            return console.log(`Game Over`);
        } else if (turnCount === 9) {
            console.log(`---Stalemate: No One Wins---`);
            return console.log(`Game Over`);
        }
        
        rotateActivePlayer();
        turnCounter();
        
    }
    return {
        playRound,
        gameboard,
    };
}

function displayBoard() {
    const squares = document.querySelectorAll('.square');

    const drawMarkers = () => {
        squares[0].textContent = newgame.gameboard.row0[0];
        squares[1].textContent = newgame.gameboard.row0[1];
        squares[2].textContent = newgame.gameboard.row0[2];

        squares[3].textContent = newgame.gameboard.row1[0];
        squares[4].textContent = newgame.gameboard.row1[1];
        squares[5].textContent = newgame.gameboard.row1[2];
        
        squares[6].textContent = newgame.gameboard.row2[0];
        squares[7].textContent = newgame.gameboard.row2[1];
        squares[8].textContent = newgame.gameboard.row2[2];
    }

    return { drawMarkers };
}

const player1 = createPlayer('Wallace', 'x');
const player2 = createPlayer('Grommit', 'o');

let newgame = playGame();


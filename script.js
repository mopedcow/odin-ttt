const newBoard = (function () {
    let row0 = ['n', 'n', 'n'];
    let row1 = ['n', 'n', 'n'];
    let row2 = ['n', 'n', 'n'];
    return {row0, row1, row2};
});

function createPlayer (name, marker) {
    let wins = 0;
    const getWins = () => wins;
    const incWins = () => wins++;
    const clearWins = () => wins = 0;
    return { name, marker, getWins, incWins, clearWins };
}

function playGame () {
    const gameboard = newBoard();
    let activePlayer = player1;
    let turnCount = 1;

    const isOccupied = (row, col) => {
        if (gameboard[row][col] !== 'n') {
            return true;
        } else {
            return false;
        }
    }
    const placeMarker = (marker, row, col) => {
        gameboard[row].splice(col, 1, marker);
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
            }
    }

    const playRound = (getRow, getCol) => {
        getRow = `row${getRow}`;

        if (isOccupied(getRow, getCol)) { return console.log('error, occupied space'); }
        
        placeMarker(activePlayer.marker, getRow, getCol);

        console.log(`turn ${turnCount}`);
        console.log(gameboard);

        if (checkForWin(activePlayer.marker)) {
            activePlayer.incWins();
            console.log(`---${activePlayer.name} wins!!---`);
            return console.log(`Game Over`);
        } else if (turnCount === 9) {
            console.log(`---Stalemate: No One Wins---`);
            return console.log(`Game Over`);
        }
        gameDisplay().drawMarkers();
        rotateActivePlayer();
        turnCounter();
        
    }

    return {
        playRound,
        gameboard,
    };
}

function gameDisplay() {
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




const displayStatus = document.querySelector('.status-text');
displayStatus.textContent = `test`;



/* testing in console below */


/* player1 wins
newgame.playRound(1, 1);
newgame.playRound(0, 1);
newgame.playRound(0, 1);
newgame.playRound(0, 0);
newgame.playRound(1, 2);
newgame.playRound(2, 2);

newgame = playGame();
*/

/* Stalemate */
newgame.playRound(0, 0);
newgame.playRound(1, 2);
newgame.playRound(2, 2);
//newgame.playRound(1, 1);
//newgame.playRound(1, 0);
//newgame.playRound(2, 0);
//newgame.playRound(0, 2);
//newgame.playRound(0, 1);
// newgame.playRound(2, 1);




/* player 2 wins 
newgame.playRound(0, 1);
newgame.playRound(1, 1);
newgame.playRound(0, 0);
newgame.playRound(0, 2);
newgame.playRound(2, 2);
newgame.playRound(2, 0);

newgame = playGame();
*/
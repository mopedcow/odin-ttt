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

/* Wrap the below in 'gameplay' function? */

function playGame () {
   const gameboard = newBoard();
    const placeMarker = (marker, row, col) => {
        row = `row${row}`;
        if (gameboard[row][col] === 'x' ||
            gameboard[row][col] === 'o') {
                return console.log(`! Occupied space at ${row} col${col}: '${marker}' marker not placed.`);
            } else {
                gameboard[row].splice(col, 1, marker);
                return console.log(`'${marker}' marker placed: ${row} col${col}`)
            }
    }
    let turnCount = 0;
    const turnCounter = () => {
        turnCount++;
        return console.log(`turn count is now: ${turnCount}`);
    }
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
    const checkEndCondition = (player, marker) => {
        if (checkForWin(marker)) {
            player.wins += 1;
            console.log(`${player.name} wins!!`);
        } else if (turnCount === 9) {
            console.log(`Stalemate :-(`);
        } else {
            console.log(`No winner yet, game continues.`);
        }
    }
    const playRound = (getRow, getCol) => {
        placeMarker(activePlayer.marker, getRow, getCol);
        turnCounter();
        checkEndCondition();
        rotateActivePlayer();
    }

    return {
        playRound,
    };
}

const player1 = createPlayer('Wallace', 'x');
const player2 = createPlayer('Grommit', 'o');

let activePlayer = player1;

let newgame = playGame();

/* End 'gamplay' function */


/* Testing below 

newGameBoard();

placeMarker(player2.marker, 0, 2);
placeMarker(player2.marker, 1, 1);
placeMarker(player2.marker, 2, 0);

console.log(gameboard);
turnCount = 8;
checkEndCondition(player2, player2.marker);

placeMarker(player1.marker, 0, 2);

newGameBoard();
console.log(gameboard);
*/



const gameboard = (function () {
    let row0 = ['n', 'n', 'n'];
    let row1 = ['n', 'n', 'n'];
    let row2 = ['n', 'n', 'n'];
    return {row0, row1, row2};
});

function createPlayer (name, marker) {
    return { name, marker };
}

function placeMarker (marker, row, col) {
    row = `row${row}`;
    currGame[row].splice(col, 1, marker);
    console.log(currGame);
}

function checkForWin (marker) {
    if (currGame.row0[0] == marker &&
        currGame.row1[0] == marker &&
        currGame.row2[0] == marker) {
            return true;
        }
}

const player1 = createPlayer('Wallace', 'x');
const player2 = createPlayer('Grommit', 'o');

let currGame = gameboard();
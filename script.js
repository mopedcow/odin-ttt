

let turnCount = 0;

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
 
}
function turnCounter () {
    return turnCount++;
}
function checkForWin (marker) {
    if (currGame.row0[0] === marker &&
        currGame.row1[0] === marker &&
        currGame.row2[0] === marker ||

        currGame.row0[1] === marker &&
        currGame.row1[1] === marker &&
        currGame.row2[1] === marker ||

        currGame.row0[2] === marker &&
        currGame.row1[2] === marker &&
        currGame.row2[2] === marker ||

        currGame.row0[0] === marker &&
        currGame.row0[1] === marker &&
        currGame.row0[2] === marker ||

        currGame.row1[0] === marker &&
        currGame.row1[1] === marker &&
        currGame.row1[2] === marker ||

        currGame.row2[0] === marker &&
        currGame.row2[1] === marker &&
        currGame.row2[2] === marker ||

        currGame.row0[0] === marker &&
        currGame.row1[1] === marker &&
        currGame.row2[2] === marker ||

        currGame.row0[2] === marker &&
        currGame.row1[1] === marker &&
        currGame.row2[0] === marker ) {
            return true;
        } else {
            return false;
        }
}

const player1 = createPlayer('Wallace', 'x');
const player2 = createPlayer('Grommit', 'o');

let currGame = gameboard();

placeMarker(player2.marker, 0, 2);
placeMarker(player2.marker, 1, 1);
placeMarker(player2.marker, 2, 0);

console.log(currGame);
console.log(checkForWin('o'));
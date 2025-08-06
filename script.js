


const gameboard = (function () {
    let row1 = [ , , ,];
    let row2 = [ , , ,];
    let row3 = [ , , ,];
    return {row1, row2, row3};
});

function createPlayer (name, marker) {
    return { name, marker };
}

function placeMarker(marker, row, col) {
    row = `row${row}`;
    currGame[row].splice(col, 1, marker);
    console.log(currGame);
}

const player1 = createPlayer('Wallace', 'x');
const player2 = createPlayer('Grommit', 'o');

let currGame = gameboard();
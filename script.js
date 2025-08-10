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
            playRound(e.target.id);
        });
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
        displayBoard().drawMarkers();
        console.log(gameboard); //---for testing---//
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
        
        placeMarker(activePlayer.marker, getPlace);

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

    return { drawMarkers };
}

const player1 = createPlayer('Wallace', 'x');
const player2 = createPlayer('Grommit', 'o');

let newgame = playGame();


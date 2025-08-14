const newBoard = (function () {
    return board = [ , , , , , , , , ,];
});


function createPlayer (name, marker) { 
    let wins = 0;
    const incWins = () => { wins++; }
    const showWins = () => { return wins; }
    return { 
        name, 
        marker,
        incWins,
        showWins 
    } 
}

function playGame () {

    const squares = document.querySelectorAll('.square');
    for (i = 0; i < squares.length; i++) {
        squares[i].addEventListener('click', (e) => {
            playRound(e.target.id);
        });
    }

    const resetButton = document.querySelector('#reset-button');
    resetButton.addEventListener('click', () => {
        resetGame();
    })

    const newPlayerBtn = document.querySelector('#change-players-button');
    const dialog = document.querySelector('#open-dialog');
    newPlayerBtn.addEventListener('click', () => {
        dialog.showModal();
    })

    const submitButton = document.querySelector('#change-player-names');
    submitButton.addEventListener('click', (e) => {
        //e.preventDefault();
        const p1InputName = document.querySelector('#p1-new-name').value;
        const p2InputName = document.querySelector('#p2-new-name').value;
        player1 = createPlayer(p1InputName, 'x');
        player2 = createPlayer(p2InputName, 'o');
        resetGame();
        dialog.close();
    })

    const resetGame = () => {
        console.log('resetGame called');
        for (i = 0; i < 9; i++) {
            gameboard.splice(i, 1, undefined);
        }
        console.log(gameboard);
        displayBoard().drawMarkers();
        turnCount = 1;
        gameover = false;
        if (activePlayer === player1) {
            activePlayer = player2;
            displayBoard().displayTurn(player2);
        } else {
            activePlayer = player1;
            displayBoard().displayTurn(player1);
        }
        displayBoard().hideResult();
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
    }
    const turnCounter = () => { turnCount++; }

    const rotateActivePlayer = () => {
        console.log(`rotateActivePlayer called`);
        console.log(`marker placed: ${activePlayer.marker}`);
        if (activePlayer === player1) {
            activePlayer = player2;
            console.log(`next marker: ${activePlayer.marker}`);
        } else if (activePlayer === player2) {
            activePlayer = player1;
            console.log(`next marker: ${activePlayer.marker}`);
        } else {
            console.log(`something's wrong?`);
            console.log(`activePlayer: ${activePlayer}`);
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
            activePlayer.incWins();
            displayBoard().displayWinner(activePlayer);
            return gameover = true;
        } else if (turnCount === 9) {
            displayBoard().displayStalemate();
            return gameover = true;
        }

        rotateActivePlayer();
        turnCounter();
    }
    let gameboard = newBoard();
    let activePlayer = player1;
    let turnCount = 1;
    let gameover = false;

    dialog.showModal();
    displayBoard();

    return {
        playRound,
        gameboard,
        activePlayer,
        player1,
        player2,
        resetGame,
    };
}

function displayBoard() {
    const p1Container = document.querySelector('#player1-container');
    const p2Container = document.querySelector('#player2-container');
    const displayP1Name = document.querySelector('#player1-name');
    const displayP2Name = document.querySelector('#player2-name');
    const displayP1Marker = document.querySelector('#player1-marker');
    const displayP2Marker = document.querySelector('#player2-marker');
    const displayP1Wins = document.querySelector('#p1-wins');
    const displayP2Wins = document.querySelector('#p2-wins');

    const stalemate = document.querySelector('#display-stalemate');
    const winner = document.querySelector('#display-winner');
    const nextTurnMessage = document.querySelector('#display-next-turn');
    const nextTurnMarker = document.querySelector('#next-turn-marker');

    displayP1Name.textContent = player1.name;
    displayP2Name.textContent = player2.name;
    displayP1Marker.textContent = player1.marker;
    displayP2Marker.textContent = player2.marker;
    displayP1Wins.textContent = player1.showWins();
    displayP2Wins.textContent = player2.showWins();

    const displayWinner = (activePlayer) => {
        nextTurnMessage.classList.add('hidden');
        winner.classList.remove('hidden');
        winner.textContent = `Winner: ${activePlayer.name}`;
    }
    const displayStalemate = () => {
        stalemate.classList.remove('hidden');
    }
    const hideResult = () => {
        stalemate.classList.add('hidden');
        winner.classList.add('hidden');
        nextTurnMessage.classList.add('hidden');
    }
    const displayTurn = (activePlayer) => {
        nextTurnMessage.classList.remove('hidden');
        nextTurnMarker.textContent = activePlayer.marker;
        if (activePlayer === player1) {
            p1Container.classList.add('player-next');
            p2Container.classList.remove('player-next');
        } else  {
            p2Container.classList.add('player-next');
            p1Container.classList.remove('player-next');
        }
        
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
        displayWinner,
        displayStalemate,
        hideResult,
     };
}


let player1 = createPlayer('Player 1', 'X');
let player2 = createPlayer('Player 2', 'O');
let newgame = playGame();
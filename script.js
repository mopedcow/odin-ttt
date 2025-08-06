const title = document.getElementById('title');
title.innerHTML = 'Console game!!';
/* remove above code later */



const gameboard = (function () {
    let row1 = [ , , ,];
    let row2 = [ , , ,];
    let row3 = [ , , ,];
    return {row1, row2, row3};
});

const players = {
    
};

const gameplay = {};

let currGame = gameboard();
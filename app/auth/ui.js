"use strict"

const store = require('../store.js')
const authEvents = require('./events')
console.log('FUCK YOU ')
console.log(authEvents)

const signUpSuccess = function (data) {
    $('#message').text("You've signed up! Please sign in.");
    $('form').trigger('reset');
    $("div.new_user").hide();
}

const signUpFailure = function (data) {
    $('#message').text("Oops! Something went wrong. Please, try again.");
    $('form').trigger('reset')
}

const signInSuccess = function (data) {
    store.user = data.user
    $('#message').text("Click 'New Game' to play!");
    console.log(data);
    $("div.new_user").hide();
    $("div.returning_user").hide();
    $("#signed_in_user").show();
    $("#new-game").show();
    $('form').trigger('reset');
}

const signInFailure = function (data) {
    $('#message').text("Try again.")    
}

const signOutSuccess = function (data) {
    $('#message').text("You've signed out.");
    $("div.new_user").show();
    $("#signed_in_user").show();
    $("div.returning_user").show();
    $("#signed_in_user").hide();
    $('#game-board').hide()
}

const newGameSuccess = function (data) {
   console.log('NewGameSuccess')
   $('#message').text("let's play")
   console.log(authEvents.onPlay)
   accessAllCells().on('click', authEvents.onPlay)
   $('#game-board').show()
}

const accessCell = function (index) {
    return $('#cell' + index)
}

const accessAllCells = function() {
    return $('div.box')
}

const drawGameBoard = function (cells) {
    for (let i = 0; i < cells.length; i++) {
        accessCell(i).html(cells[i])
    }
    // $(`#message`).text("Let's play!")
    // $('#game-board').show()
}


// This function returns whether the given indexes inside the board make a win together with the previous move

const isWin = function (cellIndex1, cellIndex2) {
    console.log('cellIndex1 = ' + cellIndex1 + ' cellIndex2 = ' + cellIndex2 + ' player = ' + store.game.player)
    return accessCell(cellIndex1).html() === store.game.player && accessCell(cellIndex2).html() === store.game.player;
    
}

const isBoardFull = function(lastPlayedCellIndex) {
    for (let i = 0; i < 9; i++) {
        if (i !== lastPlayedCellIndex && accessCell(i).html() === '') {
            return false
        }
    }
    return true
}

const didAnyoneWin = function (lastPlayedCellIndex) {
    if (lastPlayedCellIndex === 0) {
        return isWin(1, 2) || isWin(3, 6) || isWin(4, 8) 
    }
    if (lastPlayedCellIndex === 1) {
        return isWin(0, 2) || isWin(4, 7)
    }
    if (lastPlayedCellIndex === 2) {
        return isWin(0, 1) || isWin(5, 8) || isWin(4, 6) 
    }
    if (lastPlayedCellIndex === 3) {
        return isWin(0, 6) || isWin(4, 5)
    }
    if (lastPlayedCellIndex === 4) {
        return isWin(0, 8) || isWin(1, 7) || isWin(2, 6) || isWin(3, 5)
    }
    if (lastPlayedCellIndex === 5) {
        return isWin(2, 8) || isWin(3, 4)
    }
    if (lastPlayedCellIndex === 6) {
        return isWin(0, 3) || isWin(4, 2) || isWin(7, 8) 
    }
    if (lastPlayedCellIndex === 7) {
        return isWin(1, 4) || isWin(6, 8)
    }
    if (lastPlayedCellIndex === 8) {
        return isWin(0, 4) || isWin(2, 5) || isWin(6, 7)
    }
   
}

const showTie =  function() {
    $(`#message`).html("Game Over - It's a Tie!")
    accessAllCells().prop('disabled', true)
//  alert("Tie Game")
}

const showWin =  function() {
    $('#message').text('Game Over - ' + store.game.player + ' wins!') 
    accessAllCells().prop('disabled', true)
}

// const updateCell = function (cellIndex) {
//     $('#cell' + cellIndex).html
// }

module.exports = {
    signUpSuccess,
    signUpFailure,
    signInSuccess,
    signInFailure,
    signOutSuccess,
    drawGameBoard,
    didAnyoneWin,
    isBoardFull,
    showTie,
    showWin,
    newGameSuccess,
    accessCell,
    accessAllCells
} 
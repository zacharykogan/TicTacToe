"use strict"

const store = require('../store.js')

const SignUpSuccess = function (data) {
    $('#message').text("You've signed up!");
    $('form').trigger('reset');
    $("div.new_user").hide();
}

const SignUpFailure = function (data) {
    $('#message').text("Oops! Something went wrong. Please, try again.");
    $('form').trigger('reset')
}

const SignInSuccess = function (data) {
    store.user = data.user
    $('#message').text("You've signed in!");
    console.log(data);
    $("div.new_user").hide();
    $("div.returning_user").hide();
    $("#signed_in_user").show();
    $("#new-game").show();
    $('form').trigger('reset');
}

const SignInFailure = function (data) {
    $('#message').text("Try again.")    
}

const SignOutSuccess = function (data) {
    $('#message').text("You've signed out.");
    $("div.new_user").show();
    $("#signed_in_user").show();
    $("div.returning_user").show();
    $("#signed_in_user").hide();
}

const drawGameBoard = function (cells) {
    for (let i = 0; i < cells.length; i++) {
        $('#cell' + i + ' button').html(cells[i])
    }
    $(`#message`).text("Let's play!")
}


// This function returns whether the given indexes inside the board make a win together with the previous move

const isWin = function (cellIndex1, cellIndex2) {
    console.log('cellIndex1 = ' + cellIndex1 + ' cellIndex2 = ' + cellIndex2 + ' player = ' + store.game.player)
    return $('#cell' + cellIndex1 + ' button').html() === store.game.player && $('#cell' + cellIndex2 + ' button').html() === store.game.player;
    
}

const isBoardFull = function(lastPlayedCellIndex) {
    for (let i = 0; i < 9; i++) {
        if (i !== lastPlayedCellIndex && $('#cell' + i + ' button').html() === '') {
            return false
        }
    }
    return true
}

const didGameEnd = function (lastPlayedCellIndex) {
    if (isBoardFull(lastPlayedCellIndex)) {
        return true
    }

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

// const updateCell = function (cellIndex) {
//     $('#cell' + cellIndex).html
// }

module.exports = {
    SignUpSuccess,
    SignUpFailure,
    SignInSuccess,
    SignInFailure,
    SignOutSuccess,
    drawGameBoard,
    didGameEnd,
    isBoardFull,
    isWin
} 
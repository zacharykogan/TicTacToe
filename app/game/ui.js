"use strict"

const newGameSuccess = function (data) {
   console.log('NewGameSuccess')
   $('#message').text("Let's Play!")
//    accessAllCells().on('click', authEvents.onPlay)
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
}

const showTie = function() {
    $('#message').html("Game Over - It's a Tie!")
    accessAllCells().off('click')
}

const showWin = function(winner) {
    $('#message').text('Game Over - ' + winner + ' wins!') 
    accessAllCells().off('click')
}

module.exports = {
    newGameSuccess,
    drawGameBoard,
    accessCell,
    accessAllCells,
    showTie,
    showWin
}
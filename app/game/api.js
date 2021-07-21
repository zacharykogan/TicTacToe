"use strict"

const config = require("../config");
const store = require('../store')

const newGame = function () {
  return $.ajax({
    url: 'https://tic-tac-toe-api-development.herokuapp.com/games',
    method: 'POST',
    headers: { Authorization: 'Bearer ' + store.user.token }
  })
}

const play = function (cellIndex, gameOver) {
  console.log('cellIndex = ' + cellIndex + ' gameOver = ' + gameOver)
  return $.ajax({
    url: 'https://tic-tac-toe-api-development.herokuapp.com/games/' + store.game._id,
    method: 'PATCH',
    headers: { Authorization: 'Bearer ' + store.user.token },
    data: {
      'game': {
        'cell': {
          'index': cellIndex,
          'value': store.game.player,
        },
        'over': gameOver
      }
    }
  })
}

module.exports = {
  newGame,
  play
}

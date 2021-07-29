'use strict'

const store = require('../store')
const game = require('./game')
const ui = require('./ui')
const api = require('./api')

const onNewGame = function (event) {
  event.preventDefault()
  const gameOver = store.game === undefined || store.game.over
  if (gameOver || confirm('You are in the middle of a game - are you sure you want to restart?')) {
    api.newGame()
      .then(function (data) {
        ui.newGameSuccess()
        store.game = {
          _id: data.game._id,
          player: 'x',
          over: false
        }
        ui.drawGameBoard(data.game.cells)
        ui.accessAllCells().on('click', onPlay)
        console.log(data)
      })
  }
}

const onPlay = function (event) {
  event.preventDefault()

  const cellIndex = $(event.target).data('cell-index')
  console.log('onPlay cellIndex: ' + cellIndex)
  let tie = false
  let win = false
  ui.accessCell(cellIndex).off('click')

  win = game.didAnyoneWin(cellIndex)
  if (!win) {
    tie = game.isBoardFull(cellIndex)
  }

  const gameOver = tie || win

  api.play(cellIndex, gameOver)
    .then(function (data) {
      store.game.player = store.game.player === 'x' ? 'o' : 'x'
      ui.drawGameBoard(data.game.cells)
      console.log(data)
    })

  if (win) {
    ui.showWin(store.game.player)
  } else if (tie) {
    ui.showTie()
  }

  if (win || tie) {
    store.game.over = true
  }
}

module.exports = {
  onNewGame
}

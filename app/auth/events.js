'use strict'

const getFormfields = require('./../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('../store.js')

const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormfields(form)
  api.signUp(data).then(ui.signUpSuccess)
  .catch(ui.signUpFailure)
}
const onSignIn = (event) => {
  event.preventDefault()
  const form = event.target
  const data = getFormfields(form)
  api.signIn(data).then(ui.signInSuccess).catch(ui.signInFailure)
}

const onSignOut = function (event) {
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onNewGame = function(event){
  event.preventDefault()
  api.newGame()
    .then(function(data) {
      ui.newGameSuccess()
      store.game = {
        _id: data.game._id,
        player: 'x'
      }
      ui.drawGameBoard(data.game.cells)
      console.log(data)
    })
}

const onPlay = function(event) {
  event.preventDefault()

  let cellIndex = $(event.target).data('cell-index')
  let tie = false
  let win = false
  
  tie = ui.isBoardFull(cellIndex)
  if (!tie) {
    win = ui.didAnyoneWin(cellIndex)
  }

  let gameOver = tie || win

  api.play(cellIndex, gameOver)
    .then(function(data) {
      store.game.player = store.game.player === 'x' ? 'o' : 'x'
      ui.drawGameBoard(data.game.cells)
      console.log(data)
    })

  if (tie) {
    ui.showTie()
  }
  else if (win) {
    ui.showWin()
  }
} 

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onNewGame,
  onPlay
}

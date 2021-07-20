'use strict'

const getFormfields = require('./../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('../store.js')

const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormfields(form)
  api.signUp(data).then(ui.SignUpSuccess)
  .catch(ui.SignUpFailure)
}
const onSignIn = (event) => {
  event.preventDefault()
  const form = event.target
  const data = getFormfields(form)
  api.signIn(data).then(ui.SignInSuccess).catch(ui.SignInFailure)
}

const onSignOut = function (event) {
  api.signOut()
    .then(ui.SignOutSuccess)
    .catch(ui.signOutFailure)
}

const onNewGame = function(event){
  event.preventDefault()
  api.newGame()
    .then(function(data) {
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
  api.play(cellIndex, ui.didGameEnd(cellIndex))
    .then(function(data) {
      store.game.player = store.game.player === 'x' ? 'o' : 'x'
      ui.drawGameBoard(data.game.cells)
      console.log(data)
    })
} 

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onNewGame,
  onPlay
}

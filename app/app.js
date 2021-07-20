// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
//.hide unatharized view

const authEvents = require('./auth/events')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $("#signed_in_user").hide();
  $('#game-board').hide()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#new-game').on('click', authEvents.onNewGame)
  $('div.cell button').on('click', authEvents.onPlay)
  // let currentPlayer = '✕'

  // // // Our box click event handler
  // const onBoxClick = (event) => {
  //   console.log('click')}

  // //   // Select the box that was clicked, event.target
  //   const box = $(event.target)
})
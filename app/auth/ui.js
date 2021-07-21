'use strict'

const signUpSuccess = function (data) {
  $('form').trigger('reset')
  $('div.new_user').hide()
}

const signUpFailure = function (data) {
  $('#message').text('Oops! Something went wrong. Please, try again.')
  $('form').trigger('reset')
}

const signInSuccess = function (data) {
  $('#message').text(' ')
  $('div.new_user').hide()
  $('div.returning_user').hide()
  $('#signed_in_user').show()
  $('#new-game').show()
  $('form').trigger('reset')
}

const signInFailure = function (data) {
  $('#message').text('Oops! Check Email & Password')
}

const signOutSuccess = function (data) {
  $('#message').text('Thanks For Playing!')
  $('div.new_user').show()
  $('#signed_in_user').show()
  $('div.returning_user').show()
  $('#signed_in_user').hide()
  $('#game-board').hide()
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess
}

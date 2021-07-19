'use strict'

const getFormfields = require('./../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

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
module.exports = {
  onSignUp,
  onSignIn,
  onSignOut
}

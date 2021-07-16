const getFormfields = require('./../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormfields(form)
  api.signUp(data).then(ui.onSignUpSuccess).catch(ui.onSignUpFailure)
}
const onSignIn = (event) => {
  event.preventDefault()
  const form = event.target
  const data = getFormfields(form)
  api.signIn(data).then(ui.onSignInSuccess).catch(ui.onSignInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}
module.exports = {
  onSignUp,
  onSignIn,
  onSignOut
}

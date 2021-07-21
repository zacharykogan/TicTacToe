const config = require("../config");
const store = require('../store')

const signUp = function (data) {
  return $.ajax({
    url: 'https://tic-tac-toe-api-production.herokuapp.com/sign-up',
    method: 'POST',
    data: data
  })
}
const signIn = function (data) {
  return $.ajax({
    url: 'https://tic-tac-toe-api-production.herokuapp.com/sign-in',
    method: 'POST',
    data: data
  })
}

const signOut = function () {
  return $.ajax({
    url: 'https://tic-tac-toe-api-production.herokuapp.com/sign-out',
    method: 'DELETE',
    headers: { Authorization: 'Bearer ' + store.user.token }
  })
}

module.exports = {
  signUp,
  signIn,
  signOut
}

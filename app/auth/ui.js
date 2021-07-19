"use strict"

const store = require('../store.js')

const SignUpSuccess = function (data) {
$(`#message`).text("You've signed up!");
$('form').trigger('reset')
}

const SignUpFailure = function (data) {
$(`#message`).text("Oops! Something went wrong. Please, try again.");
$('form').trigger('reset')
}

const SignInSuccess = function (data) {
store.user = data.user
$(`#message`).text("You've signed in!");
console.log(data);
$("div.new_user").hide();
$("div.returning_user").hide();
$("div.signed_in_user").show;
$('form').trigger('reset')
//.show unautharized view
}

const SignInFailure = function (data) {
$(`#message`).text("Check your email and password, then try again.")    
}

const SignOutSuccess = function (data) {
$(`#message`).text("You've signed out.");
$("div.new_user").show();
$("div.signed_in_user").hide()
}

module.exports = {
    SignUpSuccess,
    SignUpFailure,
    SignInSuccess,
    SignInFailure,
    SignOutSuccess
}
"use strict"

const signUpSuccess = function (data) {
    $('#message').text("You've signed up! Please sign in.");
    $('form').trigger('reset');
    $("div.new_user").hide();
}

const signUpFailure = function (data) {
    $('#message').text("Oops! Something went wrong. Please, try again.");
    $('form').trigger('reset')
}

const signInSuccess = function (data) {
    $('#message').text("Click 'New Game' to play!");
    $("div.new_user").hide();
    $("div.returning_user").hide();
    $("#signed_in_user").show();
    $("#new-game").show();
    $('form').trigger('reset');
}

const signInFailure = function (data) {
    $('#message').text("Try again.")    
}

const signOutSuccess = function (data) {
    $('#message').text("You've signed out.");
    $("div.new_user").show();
    $("#signed_in_user").show();
    $("div.returning_user").show();
    $("#signed_in_user").hide();
    $('#game-board').hide()
}

module.exports = {
    signUpSuccess,
    signUpFailure,
    signInSuccess,
    signInFailure,
    signOutSuccess
} 
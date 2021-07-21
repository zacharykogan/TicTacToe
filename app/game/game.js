'use strict'

const store = require('../store')
const ui = require('./ui')

// This function returns whether the given indexes inside the board make a win together with the previous move
const isWin = function (cellIndex1, cellIndex2) {
  console.log('cellIndex1 = ' + cellIndex1 + ' cellIndex2 = ' + cellIndex2 + ' player = ' + store.game.player)
  return ui.accessCell(cellIndex1).html() === store.game.player && ui.accessCell(cellIndex2).html() === store.game.player
}

const isBoardFull = function (lastPlayedCellIndex) {
  for (let i = 0; i < 9; i++) {
    if (i !== lastPlayedCellIndex && ui.accessCell(i).html() === '') {
      return false
    }
  }
  return true
}

const didAnyoneWin = function (lastPlayedCellIndex) {
  if (lastPlayedCellIndex === 0) {
    return isWin(1, 2) || isWin(3, 6) || isWin(4, 8)
  }
  if (lastPlayedCellIndex === 1) {
    return isWin(0, 2) || isWin(4, 7)
  }
  if (lastPlayedCellIndex === 2) {
    return isWin(0, 1) || isWin(5, 8) || isWin(4, 6)
  }
  if (lastPlayedCellIndex === 3) {
    return isWin(0, 6) || isWin(4, 5)
  }
  if (lastPlayedCellIndex === 4) {
    return isWin(0, 8) || isWin(1, 7) || isWin(2, 6) || isWin(3, 5)
  }
  if (lastPlayedCellIndex === 5) {
    return isWin(2, 8) || isWin(3, 4)
  }
  if (lastPlayedCellIndex === 6) {
    return isWin(0, 3) || isWin(4, 2) || isWin(7, 8)
  }
  if (lastPlayedCellIndex === 7) {
    return isWin(1, 4) || isWin(6, 8)
  }
  if (lastPlayedCellIndex === 8) {
    return isWin(0, 4) || isWin(2, 5) || isWin(6, 7)
  }
}

module.exports = {
  didAnyoneWin,
  isBoardFull
}

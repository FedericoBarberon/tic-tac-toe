import { gameStatus } from '../constants/gameStatus'
import { winningCombinations } from '../constants/winningCombinations'

export const checkGameStatus = (board, turn) => {
  let status = gameStatus.playing

  winningCombinations.forEach(combo => {
    if (combo.every(index => board[index] === turn)) {
      status = gameStatus.win
    }
  })
  if (board.every(Boolean)) {
    status = gameStatus.draw
  }

  return status
}

import { gameStatus } from '../constants/gameStatus'
import { winningCombinations } from '../constants/winningCombinations'

export const checkGameStatus = (board, turn) => {
  let status = gameStatus.playing

  if (winningCombinations.some(combo => combo.every(index => board[index] === turn))) {
    status = gameStatus.win
  } else if (board.every(Boolean)) {
    status = gameStatus.draw
  }

  return status
}

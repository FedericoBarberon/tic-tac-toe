import { winningCombinations } from '../constants/winningCombinations'

export const checkGameEnds = (board, turn) => {
  winningCombinations.forEach(combo => {
    if (combo.every(index => board[index] === turn)) {
      console.log(`${turn} wins!`)
    }
  })
  if (board.every(Boolean)) {
    console.log('draw')
  }
}

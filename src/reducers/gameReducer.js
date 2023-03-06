import { players } from '../constants/players'
import { gameStatus } from '../constants/gameStatus'
import { changeTurn } from '../utils/changeTurn'
import { checkGameStatus } from '../utils/checkGameStatus'

export const initialState = {
  turn: players.p1,
  board: Array(9).fill(null),
  status: gameStatus.playing
}

export const actions = {
  MARK_CELL: 'MARK_CELL',
  RESET_GAME: 'RESET_GAME'
}

export const gameReducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case actions.MARK_CELL: {
      const { cellIndex } = payload
      const newBoard = [...state.board]
      newBoard[cellIndex] = state.turn

      const status = checkGameStatus(newBoard, state.turn)

      if (status === gameStatus.playing) {
        const nextTurn = changeTurn(state.turn)

        return { ...state, board: newBoard, turn: nextTurn }
      }

      return { ...state, board: newBoard, status }
    }

    case actions.RESET_GAME: return initialState
  }
}

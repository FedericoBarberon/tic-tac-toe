import { players } from '../constants/players'
import { changeTurn } from '../utils/changeTurn'
import { checkGameEnds } from '../utils/checkGameEnds'

export const initialState = {
  gameStarted: 'true',
  turn: players.p1,
  board: Array(9).fill(null)
}

export const actions = {
  MARK_CELL: 'MARK_CELL'
}

export const gameReducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case actions.MARK_CELL: {
      const newBoard = [...state.board]
      newBoard[payload.cellIndex] = state.turn

      checkGameEnds(newBoard, state.turn)

      const nextTurn = changeTurn(state.turn)

      return { ...state, board: newBoard, turn: nextTurn }
    }
  }
}

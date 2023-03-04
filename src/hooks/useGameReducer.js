import { useReducer } from 'react'
import { actions, gameReducer, initialState } from '../reducers/gameReducer'

export const useGameReducer = () => {
  const [state, dispatch] = useReducer(gameReducer, initialState)

  const markCell = (cellIndex) => dispatch({
    type: actions.MARK_CELL,
    payload: { cellIndex }
  })

  return { state, markCell }
}

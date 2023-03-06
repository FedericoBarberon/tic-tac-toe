import { createContext, useReducer } from 'react'
import { actions, gameReducer, initialState } from '../reducers/gameReducer'

export const GameContext = createContext()

export default function GameProvider ({ children }) {
  const [state, dispatch] = useReducer(gameReducer, initialState)

  const markCell = (cellIndex) => dispatch({
    type: actions.MARK_CELL,
    payload: { cellIndex }
  })

  const resetGame = () => dispatch({ type: actions.RESET_GAME })

  return (
    <GameContext.Provider value={{ state, markCell, resetGame }}>
      {children}
    </GameContext.Provider>
  )
}
